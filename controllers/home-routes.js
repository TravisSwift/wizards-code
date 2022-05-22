const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Character } = require("../models");


// rendering the homepage handlebar
router.get("/", (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
        Character.findAll({
            where: {
                // use the ID from the session
                user_id: req.session.user_id
            },
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
    } else {
        res.render("homepage");
    }

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

router.get("/character/:id", (req, res) => {
    Character.findOne({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
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
        if (!dbCharacterData) {
          res.status(404).json({ message: "No post found with this id" });
          return;
        }
  
        // serialize the data
        const character = dbCharacterData.get({ plain: true });
  
        // pass data to template
        res.render("single-character", {
          character,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;