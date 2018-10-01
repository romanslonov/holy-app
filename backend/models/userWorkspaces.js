module.exports = (sequelize, DataTypes) => {
  const UserWorkspaces = sequelize.define('UserWorkspaces', {
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user',
    },
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
  }, {});
  UserWorkspaces.associate = function (models) {
    // associations can be defined here
  };
  return UserWorkspaces;
};
