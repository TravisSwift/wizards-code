const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Character } = require("../models");


// rendering the homepage handlebar
router.get("/", (req, res) => {
    console.log(req.session);
    Character.findAll({
        // finding all characters
        attributes: ["id", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "class", "name", "str", "dex", "con", "int", "wis", "cha"
        // , "proficiency", "str_save", "dex_save", "con_save", "int_save", "wis_save", "cha_save", "acrobatics", "animal_handling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "persuasion", "religion", "sleight_of_hand", "stealth", "survival", "passive_perception", "armor_class", "initiative", "speed", "hit_points", "hit_dice", "languages"
    ],
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
        res.render("homepage", { characters, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
    Post.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
        attributes: [
            "id",
            "post_url",
            "title",
            "created_at",
            [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"), "vote_count"]
        ],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
            {
                model: User,
                attributes: ["username"]
            }
        ]

    })
        .then(dbCharacterData => {
            // seralize data before passing to template
            const characters = dbCharacterData.map(character => character.get({ plain: true }));
            // hardcode the loggedIn property as true because a user won't be able to get to the dashboard page unless they are logged in
            res.render("loadcharacter", { characters, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    console.log("login route here!")
    res.render('login');
  });
// router.get("/login", (req, res) => {
//     if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//     }
//     res.render("login");
// });

router.get('/learnmore', (req, res) => {
    res.render('learnmore');
  });

module.exports = router;