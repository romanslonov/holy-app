const usersController = require('../../controllers/users');

module.exports = (app) => {
  app.get('/api/v1/profile', usersController.getProfile);
};
