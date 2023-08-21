require('dotenv').config()
const express = require('express')
const app = express()
require('./db/conn')
const cors = require('cors')
const router=require('./routes/router')
const PORT = 5004


app.use(cors()) //To prevent cross origin error
app.use(express.json()) //
app.use(router)

//get response
app.get('/', (req, res) => {
    res.status(200).json("Server started!")
})


//Start the server
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})