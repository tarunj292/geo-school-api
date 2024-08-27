require("dotenv").config()
const express = require('express')
const app = express()
const schoolRouter = require('./api/schools/schoolRouter')

app.use(express.json())

app.use('/api', schoolRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server up and running on PORT: ${PORT}`)
})