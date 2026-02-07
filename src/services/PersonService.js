const Services = require('./Services');

class PersonService extends Services {
    constructor() {
        super('Person');
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

}

module.exports = PersonService;