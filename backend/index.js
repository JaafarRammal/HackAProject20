const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/profile')

require('./db/mongoose')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is on port ' + port)
})