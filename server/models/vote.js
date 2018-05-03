const mongoose = require('mongoose');
const { Schema } = mongoose;

const voteSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'user' },
    approve: Boolean,
    votedAt: Date
});

voteSchema.pre('save', function (next) {
    this.votedAt = Date.now();
});

module.exports = voteSchema;