const Services = require('./Services');

class PersonService extends Services {
    constructor() {
        super('Person');
    }

    async getEnrolledByStudent(studentId) {
        const student = await super.getRecordById(studentId);
        const listEnrolledClasses = await student.getAulasMatriculadas();
        return listEnrolledClasses;
    }
}

module.exports = PersonService;