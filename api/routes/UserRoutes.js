const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/Users');

// Get all users
router.get('/', (req, res, next) => {
    User.find().limit(100)
    .select('_id firstName lastName userName email userType')
    .exec()
    .then((result) =>{
        const response = {
            count: result.length,
            users: result,
            request: {
                type: 'PUT',
                url: 'localhost:5000/api/users'
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
router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;

    User.findById(id)
    .exec()
    .then((result) => {
        if (result) {
            res.status(200).json({
                message: `User found.`,
                createdUser: {
                    _id: result._id,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    userName: result.userName,
                    email: result.email,
                    userType: result.userType
                },
                request: {
                    type: 'GET',
                    url: 'localhost:5000/api/users/'+result._id
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
router.put('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        userType: req.body.userType
    });
    
    user.save()
    .then((result) => {
        res.status(201).json({
            message: `User created successfully.`,
            createdUser: {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                userName: result.userName,
                email: result.email,
                userType: result.userType
            },
            request: {
                type: 'PUT',
                url: 'localhost:5000/api/users/'+result._id
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
    User.update({_id: id}, {$set: updatedUser})
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

// Delete specific user
router.delete('/:userID', (req, res, next) => {
    const id = req.params.userID;
    User.deleteMany({_id: id})
    .exec()
    .then((result) =>{
        if(result.deletedCount === 1){
            // Delete success
            res.status(200).json({
                message: `User has been deleted successfully.`,
                result: result,
                request: {
                    type: 'DELETE',
                    url: 'localhost:5000/api/users/'+id
                }
            });
        }else{
            // Delete fail
            res.status(200).json({
                message: `User delete already happened!`,
                result: result,
                request: {
                    type: 'DELETE',
                    url: 'localhost:5000/api/users/'+id
                }
            });     
        }
    })
    .catch((error) =>{
        console.log(error);
        res.status(500).json({ error: error });
    });
});

module.exports = router;
