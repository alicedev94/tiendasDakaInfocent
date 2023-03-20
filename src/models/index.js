const { User, userSchema } = require("../models/users");
const { Persons, personsSchema } = require("../models/persons");

function setupModels(sequelize) {
  Persons.init(personsSchema, Persons.config(sequelize));
}

module.exports = setupModels;
