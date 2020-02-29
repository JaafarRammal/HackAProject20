const express = require('express')
const userRouter = require('./routers/profile')


const app = express()

const port = process.env.PORT || 3000

app.use(userRouter)

app.listen(port, () => {
    console.log('Server is on port ' + port)
})