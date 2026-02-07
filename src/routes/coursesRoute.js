const { Router } = require('express');
const CourseController = require('../controllers/CourseController');
const EnrollmentController = require('../controllers/EnrollmentController');

const courseController = new CourseController();
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/cursos', (req, res) => courseController.getCourseByParams(req, res));
router.get('/cursos/:id', (req, res) => courseController.getEntityById(req, res));
router.post('/cursos', (req, res) => courseController.createEntity(req, res));
router.put('/cursos/:id', (req, res) => courseController.updateEntity(req, res));
router.delete('/cursos/:id', (req, res) => courseController.deleteEntity(req, res));
router.get('/cursos/matriculas/lotadas', (req, res) => enrollmentController.getFullCourses(req, res));

module.exports = router;