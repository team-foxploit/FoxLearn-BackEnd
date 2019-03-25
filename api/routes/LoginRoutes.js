const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// salt for password
const saltRounds = 10;

// User login
router.post("/login", (req, res, next) => {
    let user = null;
    if(req.body.username){
        user = {
            userName: req.body.username
        }
    }else{
        user = {
            email: req.body.email
        }
    }
    User.find(user)
    .exec()
    .then((user) => {
        if(user.length === 0){
            // User not found
            return res.status(401).json({
                message: "Auth failed.",
                request: {
                    type: 'POST',
                    url: 'localhost:5000/api/login'
                }
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err){
                return res.status(401).json({
                    message: "Auth failed.",
                    error: err,
                    request: {
                        type: 'POST',
                        url: 'localhost:5000/api/login'
                    }
                });
            }
            if(result){
                // result == true
                // User found
                const token = jwt.sign({
                    email: user[0].email,
                    id: user[0]._id
                  },
                  process.env.JWT_KEY,
                  {
                      expiresIn: "1h"
                  }
                );
                return res.status(200).json({
                    message: "Auth succesfull.",
                    token: token,
                    request: {
                        type: 'POST',
                        url: 'localhost:5000/api/login'
                    }
                });
            }else{
                return res.status(401).json({
                    message: "Auth failed.",
                    request: {
                        type: 'POST',
                        url: 'localhost:5000/api/login'
                    }
                });
            }
        });
    })
    .catch((error) => {
        console.log(error);
        res.status(401).json({
            message: "User login failed.",
            error: error,
            request: {
                type: 'POST',
                url: 'localhost:5000/api/login'
            }
        });
    });
});


// User create with redundancy check!!!
router.post("/signup", (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then((user) => {
        console.log(user);        
        if (user.length !== 0) {
            return res.status(409).json({
                message: "User exist with the given email address!",
                request: {
                    type: 'POST',
                    url: 'localhost:5000/api/signup'
                }
            });
        } else {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    // Store hash in your password DB.
                    if (err) {
                        res.status(500).json({
                            message: "Password hashing failed",
                            error: err,
                            request: {
                                type: 'POST',
                                url: 'localhost:5000/api/signup'
                            }
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            userName: req.body.userName,
                            email: req.body.email,
                            password: hash,
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
                                        password: result.password,
                                        userType: result.userType
                                    },
                                    request: {
                                        type: 'PUT',
                                        url: 'localhost:5000/api/signup'
                                    }
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                                res.status(500).json({
                                    message: "User create failed.",
                                    error: error,
                                    request: {
                                        type: 'POST',
                                        url: 'localhost:5000/api/signup'
                                    }
                                });
                            });
                    }
                });
            });
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({
            message: "User create failed.",
            error: error,
            request: {
                type: 'POST',
                url: 'localhost:5000/api/signup'
            }
        });
    });
});

// Delete specific user
router.delete('/users/:userID', (req, res, next) => {
    const id = req.params.userID;
    User.deleteOne({_id: id})
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
                message: `User already deleted!`,
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