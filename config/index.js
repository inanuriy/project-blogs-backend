const {
  PORT,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USER,
} = require("./environment");

const sequelize = require("./connection");

const upload = require('./multer');

module.exports = {
  PORT,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USER,
  sequelize, 
  upload
}