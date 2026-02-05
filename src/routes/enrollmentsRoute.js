const { Router } = require('express');
const EnrollmentController = require('../controllers/EnrollmentController');
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/matriculas', (req, res) => enrollmentController.getAllEntities(req, res));
router.get('/matriculas/:id', (req, res) => enrollmentController.getEntityById(req, res));
router.post('/matriculas', (req, res) => enrollmentController.createEntity(req, res));
router.put('/matriculas/:id', (req, res) => enrollmentController.updateEntity(req, res));
router.delete('/matriculas/:id', (req, res) => enrollmentController.deleteEntity(req, res));

module.exports = router;