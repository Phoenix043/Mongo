// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vikram:vikramnaik@cluster0.dt8oe9s.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
