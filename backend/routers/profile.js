const express = require('express')
const Profile = require('../models/profile')
const router = new express.Router()
const multer = require('multer')
const sharp = require('sharp')

const upload = multer({ dest: 'uploads/' })

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
router.post('/profiles/:id/avatar', avatar.single('avatar'), async (req, res) => {
    console.log('here')
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    var base64data = Buffer.from(buffer, 'binary').toString('base64');
    console.log(base64data)
    const profile = await Profile.findOne({ _id: req.params.id })
    profile.avatar = base64data
    await profile.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.get('/profiles/:id', async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id)    
        res.send(profile)
    } catch(e) {
        res.status(400).send({ error: e })
    }
   
})

router.get('/profiles', async (req, res) => {
    console.log("Received a GET.")
    Profile.find({}, function(err, profiles) {
        res.send(profiles);  
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
