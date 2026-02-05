const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');
const categoryController = new CategoryController();

const router = Router();

router.get('/categorias', (req, res) => categoryController.getAllEntities(req, res));
router.get('/categorias/:id', (req, res) => categoryController.getEntityById(req, res));
router.post('/categorias', (req, res) => categoryController.createEntity(req, res));
router.put('/categorias/:id', (req, res) => categoryController.updateEntity(req, res));
router.delete('/categorias/:id', (req, res) => categoryController.deleteEntity(req, res));

module.exports = router;