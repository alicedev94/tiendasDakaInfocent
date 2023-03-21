const sequelize = require("../lib/sequelize");
const { models } = require("../lib/sequelize");

const findAll = async () => {
  const rta = await models.infocentPersons.findAll();
  return rta;
};

const newUser = async (data) => {
  const rta = await sequelize.models.Users.create(data);
  return rta;
};

const updateUser = async (id, data) => {
  const rta = await sequelize.models.Users.update(
    { name: data },
    {
      where: {
        id: id,
      },
    }
  );
  return rta;
};

const deleteUser = async (id) => {
  const rta = await models.infocentPersons.destroy({
    where: {
      id: id,
    },
  });
  return rta;
};

const querySql = async () => {
  const [data] = await sequelize.query(`SELECT * FROM aq$_queue_tables`);
  console.log(data);
  return data;
};

module.exports = {
  findAll,
  newUser,
  deleteUser,
  updateUser,
  querySql,
};
