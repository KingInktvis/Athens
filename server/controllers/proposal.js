const Proposal = require('../models/proposal');

module.exports.create = (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(412).send('Please provide a title and body.');
    }

    const newProposal = new Proposal({
        _user: req.user._id,
        title,
        body
    });

    newProposal.save((err) => {
        if (err) return res.status(500).send(err);
    });

    return res.status(201).send(toSend(newProposal));
};

module.exports.getId = (req, res) => {
    Proposal.findById(req.params.proposalId, (err, proposal) => {
        if (err) return res.status(500).send(err);
        if (proposal) {
            console.log(proposal);
            return res.send(toSend(proposal));
        } else {
            return res.sendStatus(404);
        }
    });
};

function toSend (proposal) {
    return {
        id: proposal._id,
        title: proposal.title,
        body: proposal.body,
        createdAt: proposal.createdAt,
        updatedAt: proposal.updatedAt
    };
}