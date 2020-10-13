require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') // To response to all IP

const routes = require('./routes.js')

const app = express();

mongoose.connect(process.env.MONGODB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

app.use(cors())
app.use(express.json()) // To response JSON modules
app.use(routes)

app.listen(process.env.PORT || 3333)