const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// create user model
class User extends Model { }

// define columns of model
User.init(
    {
        id: {
            // a required number as primary key, autoincremented to prevent duplicates
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            // users can choose any username they like, but must have one
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            // only one user per email, must have email
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            // must have a pw of min 6 chars
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    }
)

module.exports = User;