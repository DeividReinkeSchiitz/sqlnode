const Sequelize = require("sequelize");
const DatabaseConfig = require("../config/configDatabase");
//DATABASE CONNECTION
const sequelize = new Sequelize(DatabaseConfig.development);

module.exports = sequelize;
