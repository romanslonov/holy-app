module.exports = (sequelize, DataTypes) => {
  const UserProjects = sequelize.define('UserProjects', {
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
    projectId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Projects',
        key: 'id',
      },
    },
  }, {});
  UserProjects.associate = function (models) {
    // associations can be defined here
  };
  return UserProjects;
};
