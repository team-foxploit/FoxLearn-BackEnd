const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Quiz = require('../models/Quiz');
const checkAuth = require('../middleware/check-auth');

// Add a new Quiz
router.post('/', checkAuth, (req, res, next) => {
    const quiz = new Quiz({
        _id: new mongoose.Types.ObjectId(),
        topic: req.body.topic,
        tags: req.body.tags,
        questionSet: req.body.questionSet,
        difficulty: req.body.difficulty,
        author: req.body.author,
        createdDate: new Date()
    });
    quiz.save()
    .then((result) => {
        res.status(201).json({
            message: `Quiz creation successful.`,
            quiz: {
                _id: result._id,
                topic: result.topic,
                tags: result.tags,
                questionSet: result.questionSet,
                difficulty: result.difficulty,
                author: result.author,
                createdDate: result.createdDate
            },
            request: {
                type: 'POST',
                url: 'localhost:5000/api/quiz'
            }
        });
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            message: "Quiz creation failed.",
            error: error,
            request: {
                type: 'POST',
                url: 'localhost:5000/api/quiz'
            }
        });
    });
});


// Get all quizzes
router.get('/', checkAuth, (req, res, next) => {
    Quiz.find({}, '-__v').exec()
    .then((result) => {
        res.status(200).json({
            message: `Quiz retrieve successful.`,
            quiz: result,
            request: {
                type: 'GET',
                url: 'localhost:5000/api/quiz'
            }
        });
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            message: "Quiz retrieve failed.",
            error: error,
            request: {
                type: 'GET',
                url: 'localhost:5000/api/quiz'
            }
        });
    });
});

// Get a specified Quiz
router.get('/:quizID', checkAuth, (req, res, next) => {
    const quizID = req.params.quizID;
    Quiz.findById(quizID, '-__v').exec()
    .then((result) => {
        if (result) {
            res.status(200).json({
                message: `Quiz retrieve successful.`,
                quiz: result,
                request: {
                    type: 'GET',
                    url: 'localhost:5000/api/quiz/'+quizID
                }
            });
        } else {
            res.status(500).json({
                message: "Quiz retrieve failed.",
                error: "Invalid id",
                request: {
                    type: 'GET',
                    url: 'localhost:5000/api/quiz/'+quizID
                }
            });
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            message: 'Invalid id',
            error: error,
            request: {
                type: 'GET',
                url: 'localhost:5000/api/quiz/'+quizID
            }
        });
    });
});



// Update specified Quiz
router.patch('/:quizID', checkAuth, (req, res, next) => {
    const id = req.params.quizID;
    var updatedQuiz = {};
    for(const ops of req.body){
        updatedQuiz[ops.propName] = ops.value;
    }
    Quiz.findByIdAndUpdate( id, updatedQuiz)
    .exec()
    .then((quiz) => {
        if (quiz) {
            Quiz.findById(id, '-__v')
            .exec()
            .then((result) => {
                res.status(200).json({
                    message: `Quiz updated successfully.`,
                    quiz: result,
                    request: {
                        type: 'PATCH',
                        url: 'localhost:5000/api/quiz/'+id
                    }
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({
                    message: `Quiz update failed!`,
                    error: error,
                    request: {
                        type: 'PATCH',
                        url: 'localhost:5000/api/quiz/'+id
                    }
                });
            });
        } else {
            res.status(404).json({
                message: 'Invalid id',
                hint: "Quiz may be deleted",
                request: {
                    type: 'PATCH',
                    url: 'localhost:5000/api/quiz/'+id
                }
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({
            message: 'Invalid id',
            error: error,
            request: {
                type: 'PATCH',
                url: 'localhost:5000/api/quiz/'+id
            }
        });
    });
});


// DELETE specified Quiz
router.delete('/:quizID', checkAuth, (req, res, next) => {
    const id = req.params.quizID;
    Quiz.findByIdAndRemove(id)
    .exec()
    .then((quiz) => {
        if(quiz){
            Quiz.findById(id, '-__v')
            .exec()
            .then((result) => {
                if (result !== null) {
                    res.status(500).json({
                        message: `Quiz delete failed!`,
                        result: result,
                        request: {
                            type: 'DELETE',
                            url: 'localhost:5000/api/quiz/'+id
                        }
                    });
                } else {
                    res.status(200).json({
                        message: `Quiz deleted successfully.`,
                        quiz: quiz,
                        request: {
                            type: 'DELETE',
                            url: 'localhost:5000/api/quiz/'+id
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({
                    message: `Quiz delete failed!`,
                    error: error,
                    request: {
                        type: 'DELETE',
                        url: 'localhost:5000/api/quiz/'+id
                    }
                });
            })
        }else{
            res.status(404).json({
                message: 'Invalid id',
                hint: "Quiz may be already deleted",
                request: {
                    type: 'DELETE',
                    url: 'localhost:5000/api/quiz/'+id
                }
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({
            message: 'Invalid id',
            error: error,
            request: {
                type: 'DELETE',
                url: 'localhost:5000/api/quiz/'+id
            }
        });
    });
});

module.exports = router;