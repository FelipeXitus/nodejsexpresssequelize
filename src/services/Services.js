const dataSource = require('../database/models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRecords() {
        return dataSource[this.model].findAll();
    }

    async getRecordsByScope(scope) {
        return dataSource[this.model].scope(scope).findAll();
    }

    async getRecordById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async getRecordByCriteria(criteria) {
        return dataSource[this.model].findOne({ where: { ...criteria } });
    }

    async getRecordsByParams(options) {
        return dataSource[this.model].findAll({ ...options });
    }

    async getCountRecordsByParams(options) {
        return dataSource[this.model].findAndCountAll({ ...options });
    }

    async createRecord(data) {
        return dataSource[this.model].create(data);
    }

    async updateRecord(data, where, transaction = {}) {
        const listRecordUpdated = await dataSource[this.model].update(data, {
            where: { ...where },
            transaction: transaction
        });
        if (listRecordUpdated[0] === 0) {
            return false;
        }
        return true;
    }

    async deleteRecord(where) {
        const listRecordDeleted = await dataSource[this.model].destroy({
            where: { ...where }
        });
        if (listRecordDeleted === 0) {
            return false;
        }
        return true;
    }
}

module.exports = Services;