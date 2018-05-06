const Proposal = require('../models/proposal');

module.exports.place = (req, res) => {
    const { proposalId } = req.params;
    const { approve } = req.body;

    Proposal.findById(proposalId, (err, proposal) => {
        if (err) return res.status(500).send(err);
        if (!proposal) {
            return res.sendStatus(404);
        }
        const vote = findVote(proposal, req.user._id);
        if (vote) {
            vote.approve = approve
        } else {
            proposal.votes.push({
                _user: req.user._id,
                approve: approve
            });
        }
        proposal.save(function (err, obj) {
            if (err) return res.status(500).send(err);
            return res.status(201).send(toSend(obj, req.user._id));
        });

    });
};

module.exports.retrieve = (req, res) => {
    const { proposalId } = req.params;
    const userId = req.user._id;
    Proposal.findById(proposalId, (err, proposal) => {
        if (err) return res.status(500).send(proposal);
        if (!proposal) return res.sendStatus(404);
        const vote = toSend(proposal, userId);
        if (!vote) return res.sendStatus(404);
        return res.send(vote);
    });
};

function toSend(proposal, userId) {
    const vote = findVote(proposal, userId);
    if (!vote) {
        return false;
    }
    return {
        proposalId: proposal._id,
        vote: {
            approve: vote.approve,
            votedAt: vote.votedAt
        }
    };
}

function findVote(proposal, userId) {
    const len = proposal.votes.length;
    for (i = 0; i < len; ++i) {
        const vote = proposal.votes[i];
        if (vote._user.equals(userId)) {
            return vote;
        }
    }
}
