const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const expressValidator = require('express-validator');

/**
 * server configuration
 */
const config = require('../config/');
const dbService = require('./services/db');
const auth = require('./middlewares/auth');

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(expressValidator());

// secure your private routes with jwt authentication middleware
app.all('/api/v1/*', (req, res, next) => auth(req, res, next));

// Handle all v1 routes
fs.readdirSync(`${__dirname}/routes/v1`).forEach((file) => {
  require(`./routes/v1/${file}`)(app);
});

app.all('*', (req, res) => res.status(404).json({
  message: "Seems like the endpoint you're looking for no longer exists 🤔",
}));

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

module.exports = app;
