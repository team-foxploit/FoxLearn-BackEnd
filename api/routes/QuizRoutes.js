const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Answer = require('../models/Answer');
const checkAuth = require('../middleware/check-auth');

// Get all answers
router.get('/answers', checkAuth, (req, res, next) => {
    Answer.find().limit(100)
    .select("_id subject author createdDate")
    .exec()
    .then((result) =>{
        const response = {
            count: result.length,
            answers: result,
            request: {
                type: 'GET',
                url: 'localhost:5000/api/quiz/answers'
            }
        };
        if (result) {
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'No valid entry found for the provided ID.'
            });
        }   
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            error: error
        });
    });
});

// Get a specified user
router.get('/:ansID', (req, res, next) => {
    const id = req.params.ansID;

    Answer.findById(id)
    .exec()
    .then((result) => {
        if (result) {
            res.status(200).json({
                message: `User found.`,
                answers: {
                    _id: result._id,
                    subject: result.subject,
                    author: result.author,
                    createdDate: result.createdDate
                },
                request: {
                    type: 'GET',
                    url: 'localhost:5000/api/quiz/answers'+result._id
                }
            });
        } else {
            res.status(404).json({
                message: 'No valid entry found for the provided ID.'
            });
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ 
            message: `Couldn't found a user with the given information.`,
            request: {
                type: 'GET',
                url: 'localhost:5000/api/users/'+req.body._id
            },
            error: error
        });
    });

});

// Add a new user
router.put('/answers', (req, res, next) => {
    console.log(req);    
    const answer = new Answer({
        _id: new mongoose.Types.ObjectId(),
        subject: req.body.subject,
        answer: req.body.answer,
        author: req.body.author,
        createdDate: new mongoose.NativeDate()
    });
    
    answer.save()
    .then((result) => {
        res.status(201).json({
            message: `Answer created successfully.`,
            createdAnswer: {
                _id: result._id,
                subject: result.subject,
                author: result.author,
                createdDate: result.createdDate
            },
            request: {
                type: 'PUT',
                url: 'localhost:5000/api/quiz/answer'+result._id
            }
        });
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            error: error
        });
    });
});


// Update specified user
router.patch('/:userID', (req, res, next) => {
    const id = req.params.userID;
    const updatedUser = {};
    for(const ops of req.body){
        updatedUser[ops.propName] = ops.value;
    }
    User.updateOne({_id: id}, {$set: updatedUser})
    .exec()
    .then((result) => {
        if(result.nModified === 1){
            // Update success
            res.status(200).json({
                message: `User details updated successfully.`,
                result: result,
                request: {
                    type: 'PATCH',
                    url: 'localhost:5000/api/users/'+id
                }
            });
        }else{
            // Update fail
            res.status(200).json({
                message: `User update already happened!`,
                result: result,
                request: {
                    type: 'PATCH',
                    url: 'localhost:5000/api/users/'+id
                }
            });     
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error });
    });
});


module.exports = router;