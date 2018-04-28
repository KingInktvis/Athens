const User = require('../models/user');

module.exports.signup = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.sendStatus(412).send('No email and/or password provided');
    }

    User.findOne({email: email}, (err, existingUser)=>{

        //error check
        if (err) {
            return res.sendStatus(500).send(err);
        }

        //check if user already exists
        if (existingUser) {
            return res.sendStatus(409);

        }

        //create new user
        const newUser = new User({
            email: email,
            password: password
        });

        //save new user to the database
        newUser.save((err) => {
            //check for persistence errors
            if (err) {
                return res.sendStatus(500);
            }
        });

        return res.sendStatus(200);
    });
};

