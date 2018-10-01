module.exports = (sequelize, DataTypes) => {
  const Workspace = sequelize.define('Workspace', {
    name: DataTypes.STRING,
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {});
  Workspace.associate = function (models) {
    Workspace.belongsToMany(models.User, { through: 'UserWorkspaces', foreignKey: 'workspacesId', as: 'members' });
    Workspace.belongsTo(models.User, { foreignKey: 'ownerId', as: 'owner' });
  };
  return Workspace;
};
