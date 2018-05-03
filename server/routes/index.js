const auth = require('../controllers/authentication');
const requireAuth = require('../middleware/require-auth');
const proposal = require('../controllers/proposal');

module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.send('hello world');
    });

    app.post('/signup', auth.signup);
    app.post('/signin', auth.signin);
    app.post('/proposal', requireAuth, proposal.create);
    app.get('/proposal/:proposalId', proposal.getId);
};