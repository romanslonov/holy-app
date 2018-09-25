/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Workspace = require('./Workspace');

const tableName = 'user_workspace';

const UserWorkspace = sequelize.define('user_workspace', {
  role: Sequelize.STRING,
}, { tableName });

User.belongsToMany(Workspace, { through: UserWorkspace });
Workspace.belongsToMany(User, { through: UserWorkspace });

module.exports = UserWorkspace;
