const { Router } = require('express');
const CourseController = require('../controllers/CourseController');
const courseController = new CourseController();

const router = Router();

router.get('/cursos', (req, res) => courseController.getAllEntities(req, res));
router.get('/cursos/:id', (req, res) => courseController.getEntityById(req, res));
router.post('/cursos', (req, res) => courseController.createEntity(req, res));
router.put('/cursos/:id', (req, res) => courseController.updateEntity(req, res));
router.delete('/cursos/:id', (req, res) => courseController.deleteEntity(req, res));

module.exports = router;