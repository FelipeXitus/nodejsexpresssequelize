const Controller = require('./Controller');
const EnrollmentServices = require('../services/EnrollmentService');
const enrollmentService = new EnrollmentServices();

class EnrollmentController extends Controller {
    constructor() {
        super(enrollmentService);
    }

    async getEnrollmentByStudent(req, res) {
        const { estudante_id } = req.params;
        try {
            const listEnrollmentStudent = await enrollmentService.getRecordsByParams({ estudante_id: Number(estudante_id), status: 'matriculado' });
            return res.status(200).json(listEnrollmentStudent);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async getCountEnrollmentByStudent(req, res) {
        const { estudante_id } = req.params;
        try {
            const listEnrollmentStudent = await enrollmentService.getCountRecordsByParams({ estudante_id: Number(estudante_id), status: 'matriculado' });
            return res.status(200).json(listEnrollmentStudent.count);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

}

module.exports = EnrollmentController;