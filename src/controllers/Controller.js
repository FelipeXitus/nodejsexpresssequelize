const idConverter = require('../utils/StringConvertionHelper.js');

class Controller {
    constructor(entityService) {
        this.entity = entityService;
    }

    async getAllEntities(req, res) {
        try {
            const recordList = await this.entity.getAllRecords();
            return res.status(200).json(recordList);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async getEntityById(req, res) {
        const { id } = req.params;
        try {
            const aRecord = await this.entity.getRecordById(Number(id));
            return res.status(200).json(aRecord);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async getEntityByCriteria(req, res) {
        const { ...criteria }  = req.params;
        const where = idConverter(criteria);
        try {
            const records = await this.entity.getRecordByCriteria(where);
            return res.status(200).json(records);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async createEntity(req, res) {
        const newRecord = req.body;
        try {
            const createdRecord = await this.entity.createRecord(newRecord);
            return res.status(201).json(createdRecord);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async updateEntity(req, res) {
        const { ...params } = req.params;
        const updatedInfo = req.body;
        const where = idConverter(params);
        try {
            const updatedRecord = await this.entity.updateRecord(updatedInfo, where);
            if (!updatedRecord) {
                return res.status(404).json({ erro: 'Resgistro não encontrado' });
            }
            return res.status(200).json({ mensagem: 'Registro atualizado com sucesso' });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async deleteEntity(req, res) {
        const { ...params } = req.params;
        const where = idConverter(params);
        try {
            const deletedRecord = await this.entity.deleteRecord(where);
            if (!deletedRecord) {
                return res.status(404).json({ erro: 'Resgistro não encontrado' });
            }
            return res.status(200).json({ mensagem: 'Registro deletado com sucesso' });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
}

module.exports = Controller;