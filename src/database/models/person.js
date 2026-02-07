'use strict';
const IsValid = require('../../utils/cpfValidateHelper');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'docente_id'
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      });
      Person.hasMany(models.Enrollment, {
        foreignKey: 'estudante_id',
        as: 'todasMatriculas'
      });      
    }
  }
  Person.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 50],
          msg: 'O nome deve conter entre 3 e 50 caracteres!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato email inválido!'
        }
      }
    },
    cpf: { 
      type: DataTypes.STRING,
      validate: {
        cpfIsValid: (cpf) => {
            if (!IsValid(cpf)) throw new Error('Numero de CPF inválido!');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
    scopes: {
      allPeople: {
        where: {}
      }
    }
  });
  return Person;
};