const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema model
const AnswerSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    }
});

const Answer = mongoose.model('answers', AnswerSchema)

module.exports = Answer;