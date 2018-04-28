const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    name: String,
    password: String,
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;