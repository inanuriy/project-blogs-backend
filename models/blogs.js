const Sequelize = require("sequelize");
const {sequelize} = require("../config")

module.exports = sequelize.define("Blogs", {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Picture: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Date: {
        type: Sequelize.STRING,
        allowNull: true
    },
    AuthorID: {
        type: Sequelize.STRING,
        allowNull: false
    }
})