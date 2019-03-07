const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema model
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    userType: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
