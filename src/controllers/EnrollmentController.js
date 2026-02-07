const Sequelize = require('sequelize');
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
            const listEnrollmentStudent = await enrollmentService.getRecordsByParams({ 
                where: { 
                    estudante_id: Number(estudante_id), 
                    status: 'matriculado'
                },
                limit: 20,
                order: [['id', 'DESC']]
         });
            return res.status(200).json(listEnrollmentStudent);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async getCountEnrollmentByStudent(req, res) {
        const { estudante_id } = req.params;
        try {
            const listEnrollmentStudent = await enrollmentService.getCountRecordsByParams({ 
                where: {
                    estudante_id: Number(estudante_id), 
                    status: 'matriculado'
                },
                limit: 20,
                order: [['id', 'DESC']]
            });
            return res.status(200).json(listEnrollmentStudent.count);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

    async getFullCourses(req, res) {
        const fullyBooked = 2;
        try {
            const fullCourses = await enrollmentService.getCountRecordsByParams({ 
                where: {
                    status: 'matriculado'
                },
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`count(curso_id) >= ${fullyBooked}`)
             });
            return res.status(200).json(fullCourses.count);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

}

module.exports = EnrollmentController;