'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      Enrollment.belongsTo(models.Person, {
        foreignKey: 'estudante_id'
      });
      Enrollment.belongsTo(models.Course, {
        foreignKey: 'curso_id'
      });
    }
  }
  Enrollment.init({
    estudante_id: DataTypes.INTEGER,
    curso_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollment',
    tableName: 'matriculas'
  });
  return Enrollment;
};