const sequelize = require("../lib/sequelize");

const nameGetLog = async () => {
  const rta = await sequelize.models.modelNameEoPersonas.findAll();
  return rta;
};

const nameNewLog = async (data) => {
  const rta = await sequelize.models.modelNameEoPersonas.create(data);
  return rta;
};

module.exports = {
  nameNewLog,
  nameGetLog,
};
