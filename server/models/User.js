const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const { isEmail, doesContain } = require('../utils/validation');

const schema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, 'Email is required'],
      validate: { validator: isEmail, message: 'Email is not valid' },
    },
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

schema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

module.exports = mongoose.model('User', schema);
