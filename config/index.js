const {
  PORT,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USER,
} = require("./environment");

const sequelize = require("./connection");

module.exports = {
  PORT,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USER,
  sequelize
}