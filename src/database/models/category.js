'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Course, {
                foreignKey: 'categoria_id'
            });
        }
    }
    Category.init({
        titulo: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Category',
        tableName: 'categorias',
        paranoid: true
    });
    return Category;
};