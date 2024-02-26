const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Basic email validation using a regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  age: {
    type: Number,
    // You can add additional validations for the age if needed
  },
}, { versionKey: false }); // versionKey: false removes the version key

const User = mongoose.model('User', userSchema);

module.exports = User;
