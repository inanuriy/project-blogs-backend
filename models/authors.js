const Sequelize = require("sequelize");
const {sequelize} = require("../config")

module.exports = sequelize.define("Authors", {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})