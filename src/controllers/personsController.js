const sequelize = require("../lib/sequelize");

const registerPerson = async (data) => {
  const rta = await sequelize.models.infocentPersons.create(data);
  return rta;
};

module.exports = {
  registerPerson,
};
