// importing the Sequelize constructor from the library
const Sequelize = require("sequelize");
// require the dotenv package
require("dotenv").config();

let sequelize;


if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to the database
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    });
}

module.exports = sequelize;