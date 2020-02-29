const express = require('express')
const Profile = require('../models/profile')
const router = new express.Router()
const multer = require('multer')
const sharp = require('sharp')

const avatar = new multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            cb(new Error('File type not matched'))
        }
        cb(undefined, true)
    }
})

router.post('/profiles/avatar', avatar.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.get('/profiles', async (req, res) => {
    console.log("Received a GET.")
    Profile.find({}, function(err, profiles) {
        var profilesMap = {}
        profiles.forEach(function(profile) {
            profilesMap[profile._id] = profile;
          });
      
          res.send(profilesMap);  
    })
})


router.post('/profiles', async (req, res) => {
    console.log("Received a POST.")
    const profile = new Profile({
        ...req.body,
    })
    console.log(profile)
    try {
        await profile.save()
        res.status(201).send(profile)
    } catch(e) {
        res.status(400).send(e)
    } 
})


module.exports = router
