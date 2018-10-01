module.exports = (sequelize, DataTypes) => {
  const UserWorkspaces = sequelize.define('UserWorkspaces', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    workspaceId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Workspaces',
        key: 'id',
      },
    },
  }, { paranoid: true });
  UserWorkspaces.associate = function (models) {
    // associations can be defined here
  };
  return UserWorkspaces;
};
