const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findOne({ where: { id } });

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
    return res.status(500).json({ message: 'Internal server error' });
  }
};
