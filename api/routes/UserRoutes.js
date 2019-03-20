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
        console.log(result);
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
        console.log(result);
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
router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID;
    const updatedProduct = {};
    console.log(req.body);
    for(const item of req.body){
        updatedProduct[item.propName] = item.value;
    }
    User.update({_id: id}, {$set: updatedProduct})
    .exec()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);     
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: error });
    });
});

// Delete specific user
router.delete('/:productID', (req, res, next) => {
    const id = req.params.productID;
    User.deleteMany({_id: id})
    .exec()
    .then((result) =>{
        console.log(result.n);
        res.status(200).json(result);
    })
    .catch((error) =>{
        console.log(error);
        res.status(500).json({ error: error });
    });
});

module.exports = router;
