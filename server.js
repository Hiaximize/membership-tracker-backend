// Dependencies
const express = require('express');
const env = ('dotenv');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000
const members = require('./models/members.js')
const membersController = require('./controllers/members.js');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;
const Schema = mongoose.Schema;

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors()); // NO SENSITIVE INFORMATION WITH THIS SETTING
app.use('/members', membersController)
//////////////////////////////

// Code to handle database 
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

// Logs the status for the database
db.on('error', (error) => {
    console.log(error.message, "is Mongo not running?");
});

db.on('connected', () => {
    console.log("successfully connected to:", MONGODB_URI);
});

db.on('disconnect', () => {
    console.log("mongod disconnected");
});


app.listen(port, () => {
    console.log("Listening on port ", port)
})