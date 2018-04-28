const auth = require('../controllers/authentication');

module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.send('hello world');
    });

    app.post('/signup', auth.signup);

};