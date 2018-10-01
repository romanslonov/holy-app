const { User } = require('../models');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    return res.status(200).json({ profile: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
