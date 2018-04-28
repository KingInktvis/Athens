const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

let userSchema = new Schema({
    email: String,
    name: String,
    password: String,
    createdAt: Date,
    updatedAt: Date
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

//Sets the values of updatedAt and createdAt
userSchema.pre('save', function (next) {
    const date = Date.now();
    this.updatedAt = date;
    if (this.isNew) {
        this.createdAt = date;
    }
    next();
});

userSchema.methods.passwordIs = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;