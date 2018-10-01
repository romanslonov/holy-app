module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
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
  Project.associate = function (models) {
    Project.belongsToMany(models.User, { through: 'UserProjects', foreignKey: 'projectId', as: 'members' });
    Project.belongsTo(models.User, { foreignKey: 'ownerId', as: 'owner' });
  };
  return Project;
};
