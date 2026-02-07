const { Op } = require('sequelize');
const Controller = require('./Controller');
const CourseServices = require('../services/CourseService');
const courseService = new CourseServices();

class CourseController extends Controller {
    constructor() {
        super(courseService);
    }

    async getCourseByParams(req, res) {
        
        const { data_inicial, data_final } = req.query;
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const listCourses = await courseService.getRecordsByParams(where);
            return res.status(200).json(listCourses);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }

}

module.exports = CourseController;