const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Character } = require("../models");

// rendering the homepage handlebar
router.get("/", (req, res) => {
    console.log(req.session);
    Post.findAll({
        // finding all characters
        attributes: ["id", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "class", "name", "str", "dex", "con", "int", "wis", "cha"],
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