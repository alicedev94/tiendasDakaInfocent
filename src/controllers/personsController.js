const sequelize = require("../lib/sequelize");

const registerPerson = async (data) => {
  const rta = await sequelize.models.infocentPersons.create(data);
  return rta;
};

const findAll = async () => {
  const rta = await sequelize.models.infocentPersons.findAll();
  return rta;
};

module.exports = {
  registerPerson,
  findAll,
};
