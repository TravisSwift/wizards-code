const router = require("express").Router();
const { User, Character } = require("../../models");

router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ["password"] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/:id", (req, res) => {
    User.findOne({
        attributes: { exclude: ["password"] },
        where: {
            id: req.params.id
        },
        include: [
            {
                // other models related to user
                model: Character,
                attributes: ["id", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "class", "name", "str", "dex", "con", "int", "wis", "cha", "race", "hit_points", "level", "armor_class" 
                // , "proficiency", "str_save", "dex_save", "con_save", "int_save", "wis_save", "cha_save", "acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "persuasion", "religion", "sleight_of_hand", "stealth", "survival", "passive_perception", "armor_class", "initiative", "speed", "hit_points", "hit_dice", "languages"
            ],   
            },
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with this id" });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// creating a new user
router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/login", (req, res) => {
    // queried the user table for the user's email
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        // if email not found, throw an error
        if (!dbUserData) {
            res.status(400).json({ message: "No user with that email address!" });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        // if password is incorrect, throw error
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password" });
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: "You are now logged in!" });
        });
    });
});


router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;