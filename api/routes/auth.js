const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const checkUserEmail = await User.findOne({
            email: req.body.email,
        });

        if (checkUserEmail) {
            return res.status(400).json('Email already in use');
        }

        const checkUserName = await User.findOne({
            username: req.body.username,
        });

        if (checkUserName) {
            return res.status(400).json('Username already in use');
        }

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({
            email: req.body.email,
        });

        if(!user){
            return res.status(404).json('User not found');
        }

        if(req.body.password !== user.password){
            return res.status(400).json('Wrong Password');
        }

        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
    
});

module.exports = router;