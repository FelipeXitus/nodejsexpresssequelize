const dataSource = require('../models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRecords() {
        return dataSource[this.model].findAll();
    }

    async getRecordById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async createRecord(data) {
        return dataSource[this.model].create(data);
    }

    async updateRecord(data, id) {
        const listRecordUpdated = await dataSource[this.model].update(data, {
            where: { id: id }
        });
        if (listRecordUpdated[0] === 0) {
            return false;
        }
        return true;
    }

    async deleteRecord(id) {
        const listRecordDeleted = await dataSource[this.model].destroy({
            where: { id: id }
        });
        if (listRecordDeleted === 0) {
            return false;
        }
        return true;
    }
}

module.exports = Services;