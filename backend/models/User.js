const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService.password(user);
  },
};

const tableName = 'users';

const User = sequelize.define('User', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  name: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    defaultValue: 'active'
  },
  role: {
    type: Sequelize.ENUM('admin', 'user'),
    defaultValue: 'user'
  },
}, { hooks, tableName });

module.exports = User;
