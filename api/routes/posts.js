const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const fs = require('fs');

router.post('/', async (req, res) => {
    let checkUrl = req.body.img.split("https");
    let isUrl = false;

    if (checkUrl[0].length < 1){
        isUrl = true;
    }

    function base64_encode(file){
        return "data:image/jpeg;base64," + fs.readFileSync(file, 'base64');
    }

    var base64str = req.body.img;

    if(!isUrl){
        base64str = base64_encode(`/usercode/image_sharing_app/api/public/images/${req.body.img}`);
    }

    const newPost = new Post({
        userId: req.body.userId,
        desc: req.body.desc,
        img: base64str,
    });

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err);
    }
});