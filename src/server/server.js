const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

// midleware
app.use(cors())
app.use(express.json())

// database
const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection

connection.once('open', () => {
    console.info("MongoDB database connection established successfully")
});

app.use('/', require('./routes'));

app.listen(port, () => {
    console.info(`Server is running on port : ${port}`);
})