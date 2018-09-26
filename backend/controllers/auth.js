const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcryptService = require('../services/bcrypt');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: 10800 });

    return res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      if (bcryptService.comparePassword(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'secret');

        return res.status(200).json({ token, user });
      }

      return res.status(400).json({ message: 'Email or password is wrong' });
    } catch (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  return res.status(400).json({ message: 'Email or password is wrong' });
};

exports.validate = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  try {
    jwt.verify(token, 'secret');

    return res.status(200).json({ valid: true });
  } catch (e) {
    return res.status(401).json({ valid: false, message: 'Invalid token' });
  }
};
