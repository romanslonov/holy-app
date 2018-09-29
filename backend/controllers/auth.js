const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const bcryptService = require('../services/bcrypt');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: 10800 });
    const emailToken = jwt.sign({ id: user.id }, 'emailSecret', { expiresIn: '1d' });

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.user, // generated ethereal user
          pass: account.pass, // generated ethereal password
        },
      });

      // setup email data with unicode symbols
      const mailOptions = {
        from: '"Taska App', // sender address
        to: user.email, // list of receivers
        subject: 'Confirm your email', // Subject line
        html: `<a href="http://localhost:3000/confirmation/${emailToken}">http://localhost:3000/confirmation/${emailToken}</a>`, // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    });

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
      const user = await User.scope('withPassword').findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: 'Email or password is wrong' });
      }

      if (bcryptService.comparePassword(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'secret');

        delete user.dataValues.password;

        return res.status(200).json({ token, user });
      }

      return res.status(400).json({ message: 'Email or password is wrong' });
    } catch (err) {
      console.log(err);
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

exports.confirmation = async (req, res) => {
  try {
    const { token } = req.body;

    const { id } = jwt.verify(token, 'emailSecret');

    if (!id) {
      return res.status(400).json({ message: 'Invalid token or its expired.' });
    }

    await User.update({ isVerified: true }, { where: { id } });

    return res.status(200).json();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.resend = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);

    return res.status(200).json();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
