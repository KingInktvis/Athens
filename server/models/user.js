const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

let userSchema = new Schema({
    email: String,
    name: String,
    password: String,
});

userSchema.pre('save', function (next) {
    const user = this;

    //Check if the password has changed
    if (!user.isModified('password')) next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) next(err);

            user.password = hash;
            next();
        })
    });
});

userSchema.methods.passwordIs = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;