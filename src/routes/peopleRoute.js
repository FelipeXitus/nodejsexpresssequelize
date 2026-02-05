const { Router } = require('express');
const PersonController = require('../controllers/PersonController');
const personController = new PersonController();

const router = Router();

router.get('/pessoas', (req, res) => personController.getAllEntities(req, res));
router.get('/pessoas/:id', (req, res) => personController.getEntityById(req, res));
router.post('/pessoas', (req, res) => personController.createEntity(req, res));
router.put('/pessoas/:id', (req, res) => personController.updateEntity(req, res));
router.delete('/pessoas/:id', (req, res) => personController.deleteEntity(req, res));

module.exports = router;