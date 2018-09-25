/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const tableName = 'workspace';

const Workspace = sequelize.define('workspace', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    notEmpty: true,
  },
  ownerId: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    defaultValue: 'active',
  },
}, { tableName });

module.exports = Workspace;
