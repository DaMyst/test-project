const express = require('express');
const router = express.Router();
const Post = require('../model/post')
const Register = require('../model/register')

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/accounts', async (req, res) => {
    try {
        const accounts = await Register.find();
        res.json(accounts);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/accounts/:email', async (req, res) => {
    const email = req.params.email;

    try {
        const accounts = await Register.find({email});
        res.json(accounts);
    } catch (error) {
        res.json({ message: error });
    }

});



module.exports = router;