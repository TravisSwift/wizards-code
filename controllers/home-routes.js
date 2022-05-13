const router = require("express").Router();
const sequelize = require("../config/connection");
// const { Post, User, Comment } = require("../models");

// rendering the homepage handlebar
router.get("/", (req, res) => {
    Post.findAll({
        // finding all posts
        attributes: ["id", "post_url", "title", "created_at"],
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