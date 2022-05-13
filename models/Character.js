const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        class: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        str: {
            type: DataTypes.INTEGER
        },
        dex: {
            type: DataTypes.INTEGER
        },
        con: {
            type: DataTypes.INTEGER
        },
        int: {
            type: DataTypes.INTEGER
        },
        wis: {
            type: DataTypes.INTEGER
        },
        cha: {
            type: DataTypes.INTEGER
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'character'
    }
)

module.exports = Character;
