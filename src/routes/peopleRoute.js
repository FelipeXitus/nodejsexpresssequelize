const { Router } = require('express');
const PersonController = require('../controllers/PersonController');
const EnrollmentController = require('../controllers/EnrollmentController');

const personController = new PersonController();
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/pessoas', (req, res) => personController.getAllEntities(req, res));
router.get('/pessoas/todos', (req, res) => personController.getAllPeople(req, res));
router.get('/pessoas/:id', (req, res) => personController.getEntityById(req, res));
router.post('/pessoas', (req, res) => personController.createEntity(req, res));
router.put('/pessoas/:id', (req, res) => personController.updateEntity(req, res));
router.delete('/pessoas/:id', (req, res) => personController.deleteEntity(req, res));
router.get('/pessoas/:studentId/matriculas', (req, res) => personController.getEnrolledClasses(req, res));
router.post('/pessoas/:studentId/matriculas', (req, res) => enrollmentController.createEntity(req, res));

module.exports = router;