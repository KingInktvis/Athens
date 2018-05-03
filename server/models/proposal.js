const mongoose = require('mongoose');
const { Schema } = mongoose;
const Vote = require('./vote');

const proposalSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'user' },
    title: String,
    body: String,
    votes: [Vote],
    createdAt: Date,
    updatedAt: Date
});

proposalSchema.pre('save', function (next) {
    const time = Date.now();
    this.updatedAt = time;
    if (this.isNew) {
        this.createdAt = time;
    }
    next();
});

const proposalModel = mongoose.model('proposal', proposalSchema);

module.exports = proposalModel;