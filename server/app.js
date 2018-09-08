const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.use(bodyParser.json());

app.use('/', routes);

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

// done! we export it so we can start the site in start.js
module.exports = app;
