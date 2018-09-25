const Workspace = require('../models/Workspace');
const UserWorkspace = require('../models/UserWorkspace');
// const User = require('../models/User');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.user;

    const workspace = await Workspace.create({ name, ownerId: id }, { through: 'manager' });
    // const workspace = await User.addWorkspace({ name, owner_id: id }, { through: { role: 'manager' } });

    // const user = await User.findOne({ where: { id } });

    // await WorkspaceMember.create({ workspace_id: workspace.id, user_id: user.id });

    // await user.updateAttributes({ is_activated: true });

    return res.status(200).json({ workspace });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const workspace = await Workspace.findOne({ where: { id } });

    return res.status(200).json({ workspace });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { id } = req.user;

    const data = await UserWorkspace.findAll({ where: { user_id: id } });

    const promises = data.map(item => Workspace.findOne({ where: { id: item.workspace_id } }));

    const workspaces = await Promise.all(promises);

    return res.status(200).json({ workspaces });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
