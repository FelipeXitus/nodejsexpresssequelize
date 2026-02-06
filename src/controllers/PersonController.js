const Controller = require('./Controller');
const PersonServices = require('../services/PersonService');
const personService = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super(personService);
    }

    async getEnrolledClasses(req, res) {
        const { studentId } = req.params;
        try {
            const listEnrolledClasses = await personService.getEnrolledByStudent(Number(studentId));
            return res.status(200).json(listEnrolledClasses);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    async getAllPeople(req, res) {
        try {
            const listAllPeople = await personService.getScopeAllPeople();
            return res.status(200).json(listAllPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }   
}

module.exports = PersonController;