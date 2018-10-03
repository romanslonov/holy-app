const { Workspace, UserWorkspaces, User } = require('../models');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const { id: ownerId } = req.user;

    const workspace = await Workspace.create({ name, ownerId });

    const user = await User.findById(ownerId);

    await user.addWorkspace(workspace);

    await user.updateAttributes({ isActivated: true });

    return res.status(200).json({ workspace });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;

    const workspace = await Workspace.findById(id);

    if (!workspace) {
      return res.status(404).json();
    }

    return res.status(200).json({ workspace });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const workspaces = await Workspace.findAll();

    return res.status(200).json({ workspaces });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllMembersByWorkspaceId = async (req, res) => {
  try {
    const { id } = req.params;

    const workspace = await Workspace.findById(id);

    const members = await workspace.getMembers({ joinTableAttributes: [] });

    return res.status(200).json({ members });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const { id: workspaceId } = req.params;
    const { id: userId } = req.user;

    await UserWorkspaces.destroy({ where: { workspaceId } });
    await Workspace.destroy({ where: { id: workspaceId } });

    const workspaces = await Workspace.findAll();

    const user = await User.findById(userId);

    if (workspaces.length === 0) {
      await user.updateAttributes({ isActivated: false });
    }

    return res.status(200).json();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
