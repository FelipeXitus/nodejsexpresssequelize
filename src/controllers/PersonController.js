const Controller = require('./Controller');
const PersonServices = require('../services/PersonService');
const personService = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super(personService);
    }

    async getActiveEnrolledClasses(req, res) {
        const { estudante_id } = req.params;
        try {
            const listEnrolledClasses = await personService.getActiveEnrolledByStudent(Number(estudante_id));
            return res.status(200).json(listEnrolledClasses);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    } 

    async getEnrolledClasses(req, res) {
        const { estudante_id } = req.params;
        try {
            const listEnrolledClasses = await personService.getEnrolledByStudent(Number(estudante_id));
            return res.status(200).json(listEnrolledClasses);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async getAllPeople(req, res) {
        try {
            const listAllPeople = await personService.getScopeAllPeople();
            return res.status(200).json(listAllPeople);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }   
}

module.exports = PersonController;