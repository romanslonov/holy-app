const User = require('../models/User');

exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

