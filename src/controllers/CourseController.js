const Controller = require('./Controller');
const CourseServices = require('../services/CourseService');
const courseService = new CourseServices();

class CourseController extends Controller {
    constructor() {
        super(courseService);
    }
}

module.exports = CourseController;