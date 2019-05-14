const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');


// Get all users
router.get('/', (req, res, next) => {
    User.find()
    .select('_id firstName lastName userName email userType')
    .exec()
    .then((result) =>{
        const response = {
            count: result.length,
            users: result,
            request: {
                type: 'GET',
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


// Get all usernames
router.get('/all', (req, res, next) => {
    User.find()
    .select('_id userName email')
    .exec()
    .then((result) =>{
        const response = {
            count: result.length,
            users: result,
            request: {
                type: 'VIEW',
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
