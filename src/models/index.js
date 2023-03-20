const { Persons, personSchema } = require("../models/persons");

function setupModels(sequelize) {
  Persons.init(personSchema, Persons.config(sequelize));
}

module.exports = setupModels;
