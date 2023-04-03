const sequelize = require("../lib/sequelize");

const nameGetLog = async () => {
  const rta = await sequelize.models.modelNameEoPersonas.findAll();
  return rta;
};

const nameNewLog = async (data) => {
  const rta = await sequelize.models.modelNameEoPersonas.create(data);
  return rta;
};

const nameDestroyLog = async (id) => {
  const rta = await sequelize.models.modelNameEoPersonas.destroy({
    where: {
      id: id,
    },
  });
  return rta;
};

module.exports = {
  nameNewLog,
  nameGetLog,
  nameDestroyLog,
};
