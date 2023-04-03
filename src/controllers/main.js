const sequelize = require("../lib/sequelize");

const querySql = async () => {
  const [data] = await sequelize.query(`SELECT * FROM ar_spi_err;`);
  console.log(data);
  return data;
};

module.exports = {
  querySql,
};
