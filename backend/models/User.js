/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const bcryptService = require('../services/bcrypt');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService.password(user);
  },
};

const tableName = 'user';

const User = sequelize.define('user', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isActivated: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  role: {
    type: Sequelize.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
}, { hooks, tableName });

module.exports = User;
