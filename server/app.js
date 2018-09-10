const path = require('path');
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./utils/passport');
const expressValidator = require('express-validator');
const authCheckMiddleware = require('./utils/authCheckMiddleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.use(passport.initialize());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// pass the Authenticaion checker middleware
app.use('/api/', authCheckMiddleware);

// Handle all v1 routes
fs.readdirSync(`${__dirname}/routes/v1`).forEach((file) => {
  require(`./routes/v1/${file}`)(app);
});

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

// done! we export it so we can start the site in start.js
module.exports = app;
