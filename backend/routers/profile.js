const express = require('express')
const router = new express.Router()


router.get('/profiles', async (req, res) => {
    console.log("Received a GET.")
    res.send("Request receieved.")
})


router.post('/profiles', async (req, res) => {
})


module.exports = router
