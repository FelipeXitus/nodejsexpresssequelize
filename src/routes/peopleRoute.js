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
router.get('/pessoas/:estudante_id/matriculas', (req, res) => personController.getActiveEnrolledClasses(req, res));
router.get('/pessoas/:estudante_id/matriculas/todos', (req, res) => personController.getEnrolledClasses(req, res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => enrollmentController.createEntity(req, res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => enrollmentController.getEntityByCriteria(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => enrollmentController.updateEntity(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => enrollmentController.deleteEntity(req, res));

module.exports = router;