const Controller = require('./Controller');
const PersonServices = require('../services/PersonService');
const personService = new PersonServices();

class PersonController extends Controller {
    constructor() {
        super(personService);
    }
}

module.exports = PersonController;