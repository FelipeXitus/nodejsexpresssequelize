const Controller = require('./Controller');
const EnrollmentServices = require('../services/EnrollmentService');
const enrollmentService = new EnrollmentServices();

class EnrollmentController extends Controller {
    constructor() {
        super(enrollmentService);
    }
}

module.exports = EnrollmentController;