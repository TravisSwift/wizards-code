const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Character } = require("../models");

// rendering the homepage handlebar
router.get("/", (req, res) => {
    console.log(req.session);
    Post.findAll({
        // finding all characters
        attributes: ["id", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "class", "name", "str", "dex", "con", "int", "wis", "cha", "proficiency", "str_save", "dex_save", "con_save", "int_save", "wis_save", "cha_save", "acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "persuasion", "religion", "sleight_of_hand", "stealth", "survival", "passive_perception", "armor_class", "initiative", "speed", "hit_points", "hit_dice", "languages"],
        include: [
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
    .then(dbCharacterData => {
        // serialize the data
        const characters = dbCharacterData.map(post => post.get({ plain: true }));
        res.render("homepage", { characters });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
    res.redirect("/");
    return;
    }
    res.render("login");
});

module.exports = router;