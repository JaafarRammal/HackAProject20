const express = require('express')
const Profile = require('../models/profile')
const router = new express.Router()


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
