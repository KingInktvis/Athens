const auth = require('../controllers/authentication');
const requireAuth = require('../middleware/require-auth');
const proposal = require('../controllers/proposal');
const vote = require('../controllers/vote');

module.exports = (app) => {

    app.get('/', (req, res) => {
        return res.send('hello world');
    });

    app.post('/signup', auth.signup);
    app.post('/signin', auth.signin);
    app.post('/proposal', requireAuth, proposal.create);
    app.patch('/proposal', requireAuth, proposal.updateProposal);
    app.get('/proposal/:proposalId', proposal.getId);
    app.get('/proposal', proposal.list);

    app.post('/proposal/:proposalId/vote', requireAuth, vote.place);
    app.get('/proposal/:proposalId/vote', requireAuth, vote.retrieve);
};