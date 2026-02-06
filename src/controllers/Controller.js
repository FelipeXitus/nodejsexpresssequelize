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
        const criteria = req.query;
        try {
            const records = await this.entity.getRecordsByCriteria(criteria);
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
        const { id } = req.params;
        const updatedInfo = req.body;
        try {
            const updatedRecord = await this.entity.updateRecord(updatedInfo, Number(id));
            if (!updatedRecord) {
                return res.status(404).json({ erro: 'Resgistro não encontrado' });
            }
            return res.status(200).json({ mensagem: `Registro ${id} atualizado com sucesso` });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async deleteEntity(req, res) {
        const { id } = req.params;
        try {
            const deletedRecord = await this.entity.deleteRecord(Number(id));
            if (!deletedRecord) {
                return res.status(404).json({ erro: 'Resgistro não encontrado' });
            }
            return res.status(200).json({ mensagem: `Registro ${id} deletado com sucesso` });
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
}

module.exports = Controller;