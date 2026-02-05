const Controller = require('./Controller');
const CategoryServices = require('../services/CategoryService');
const categoryService = new CategoryServices();

class CategoryController extends Controller {
    constructor() {
        super(categoryService);
    }
}

module.exports = CategoryController;