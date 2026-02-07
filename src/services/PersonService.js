const dataSource = require('../database/models');
const Services = require('./Services');

class PersonService extends Services {
    constructor() {
        super('Person');
        this.enrollmentService = new Services('Enrollment');
    }

    async getActiveEnrolledByStudent(studentId) {
        const student = await super.getRecordById(studentId);
        const listEnrolledClasses = await student.getAulasMatriculadas();
        return listEnrolledClasses;
    }

    async getEnrolledByStudent(studentId) {
        const student = await super.getRecordById(studentId);
        const listEnrolledClasses = await student.getTodasMatriculas();
        return listEnrolledClasses;
    }

    async getScopeAllPeople() {
        const listAllPeople = await super.getRecordsByScope('allPeople');
        return listAllPeople;
    }

    async cancelPersonAndEnrollment(studentId) {
        return dataSource.sequelize.transaction(async (transaction) => {
            await super.updateRecord({ ativo: false }, { id: studentId }, { transaction });
            await this.enrollmentService.updateRecord({ status: 'cancelado' }, { student_id: studentId }, { transaction });
        });
    }

}

module.exports = PersonService;