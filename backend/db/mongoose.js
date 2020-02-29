const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://lei:ABC800@cluster0-33jwj.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
