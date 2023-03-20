const { Sequelize, Model, DataTypes } = require("sequelize");

const table_name = "infocent_persons";

const personsSchema = {
  nombre: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  apellido: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cedula: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  sexo: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  paisDeNacimiento: {
    allowNull: true,
    field: "pais_de_nacimiento",
    type: DataTypes.STRING,
  },
  entidadFederal: {
    allowNull: true,
    field: "entidad_federal",
    type: DataTypes.STRING,
  },
  ciudadDeNacimiento: {
    allowNull: true,
    field: "ciudad_de_nacimiento",
    type: DataTypes.STRING,
  },
  nacionalidad: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  tipoDeSangre: {
    allowNull: true,
    field: "tipo_de_sangre",
    type: DataTypes.STRING,
  },
  factorRH: {
    allowNull: true,
    field: "factor_rh",
    type: DataTypes.STRING,
  },
  registro: {
    allowNull: true,
    type: DataTypes.DATE,
    field: "fecha_registro",
    defaultValue: Sequelize.NOW,
  },
};

class Persons extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: table_name,
      modelName: "infocentPersons",
      timestamps: true,
    };
  }
}

module.exports = {
  table_name,
  personsSchema,
  Persons,
};
