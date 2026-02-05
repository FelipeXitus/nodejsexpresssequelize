'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
      static associate(models) {
        Person.hasMany(models.Course, {
          foreignKey: 'docente_id'
        });
        Person.hasMany(models.Enrollment, {
          foreignKey: 'estudante_id'
        });
    }
  }
  Person.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'pessoas'
  });
  return Person;
};