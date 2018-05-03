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
        return res.status(201).send(toSend(newProposal));
    });


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

module.exports.updateProposal = (req, res) => {
    const { id, title, body } = req.body;
    if (id && !(title || body)) {
        return res.status(412).send({ error: "Please provide the proposal id and a new body and or title." });
    }
    Proposal.findById(id, (err, proposal) => {
        if (err) return res.status(500).send(err);
        if (!proposal) return res.sendStatus(404);
        let changed = false;
        if (body && proposal.body !== body) {
            proposal.body = body;
            changed = true;
        }
        if (title && proposal.title !== title) {
            proposal.title = title;
            changed = true;
        }
        if (changed) {
            proposal.save((err) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(toSend(proposal));
            });
        } else {
            return res.status(412).send({ error: 'No changes have been send.' });
        }
    });
};