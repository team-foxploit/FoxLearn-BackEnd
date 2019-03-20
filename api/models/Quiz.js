const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema model
const quizSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answers: {
        type: Object,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: Number,
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

const Quiz = mongoose.model('users', quizSchema);

module.exports = Quiz;
