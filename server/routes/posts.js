const express = require('express');
const router = express.Router();
const Post = require('../model/post')
const Register = require('../model/register')


router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savePost = await post.save()
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/accounts', async (req, res) => {
    const post = new Register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savePost = await post.save()
        console.log(res);
    } catch (err) {
        console.log(res);

        res.json({ message: err, status: 409 });
    }
});

module.exports = router;