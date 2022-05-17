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
        race: {
            type: DataTypes.STRING
        },
        alignment: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER
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
        proficiency: {
            type: DataTypes.INTEGER
        },
        str_save: {
            type: DataTypes.INTEGER
        },
        dex_save: {
            type: DataTypes.INTEGER
        },
        con_save: {
            type: DataTypes.INTEGER
        },
        int_save: {
            type: DataTypes.INTEGER
        },
        wis_save: {
            type: DataTypes.INTEGER
        },
        cha_save: {
            type: DataTypes.INTEGER
        },
        acrobatics: {
            type: DataTypes.INTEGER
        },
        animal_handling: {
            type: DataTypes.INTEGER
        },
        arcana: {
            type: DataTypes.INTEGER
        },
        athletics: {
            type: DataTypes.INTEGER
        },
        deception: {
            type: DataTypes.INTEGER
        },
        history: {
            type: DataTypes.INTEGER
        },
        insight: {
            type: DataTypes.INTEGER
        },
        intimidation: {
            type: DataTypes.INTEGER
        },
        investigation: {
            type: DataTypes.INTEGER
        },
        medicine: {
            type: DataTypes.INTEGER
        },
        nature: {
            type: DataTypes.INTEGER
        },
        perception: {
            type: DataTypes.INTEGER
        },
        persuasion: {
            type: DataTypes.INTEGER
        },
        religion: {
            type: DataTypes.INTEGER
        },
        sleight_of_hand: {
            type: DataTypes.INTEGER
        },
        stealth: {
            type: DataTypes.INTEGER
        },
        survival: {
            type: DataTypes.INTEGER
        },
        passive_perception: {
            type: DataTypes.INTEGER
        },
        armor_class: {
            type: DataTypes.INTEGER
        },
        initiative: {
            type: DataTypes.INTEGER
        },
        speed: {
            type: DataTypes.INTEGER
        },
        hit_points: {
            type: DataTypes.INTEGER
        },
        hit_dice: {
            type: DataTypes.STRING
        },
        languages: {
            type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'character'
    }
)

module.exports = Character;
