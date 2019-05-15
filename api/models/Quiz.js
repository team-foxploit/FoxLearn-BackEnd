const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// QuestionSetSchema model
const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
});


// QuizSchema model
const quizSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    questionSet: {
        type: [questionSchema],
        required: true
    },
    difficulty: {
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

const Quiz = mongoose.model('quizzes', quizSchema);

module.exports = Quiz;
