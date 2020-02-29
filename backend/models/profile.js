const mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile