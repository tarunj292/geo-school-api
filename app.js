require("dotenv").config()
const express = require('express')
const app = express()
const schoolRouter = require('./api/schools/schoolRouter')

app.use(express.json())

app.use('/api', schoolRouter)
app.use('/', (req, res) => {
    res.send('Hello');
  });
app.use('/check', (req, res) => {
    res.status(404).send('404 Not found');
});
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server up and running on PORT: ${PORT}`)
})