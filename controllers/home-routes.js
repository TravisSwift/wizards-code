const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Character } = require("../models");

// rendering the homepage handlebar
router.get("/", (req, res) => {
    Post.findAll({
        // finding all characters
        attributes: ["id", "post_url", "title", "created_at"],
        include: [
            {
                model: Character,
                attributes: ["id", "user_id"],
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
    .then(dbPostData => {
        // serialize the data
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render("homepage", { posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
    res.render("login");
});

module.exports = router;