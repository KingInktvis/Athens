const auth = require('../controllers/authentication');
const requireAuth = require('../middleware/require-auth');

module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.send('hello world');
    });

    app.post('/signup', auth.signup);
    app.post('/signin', auth.signin);

};