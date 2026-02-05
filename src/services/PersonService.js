const Services = require('./Services');

class PersonService extends Services {
    constructor() {
        super('Person');
    }
}

module.exports = PersonService;