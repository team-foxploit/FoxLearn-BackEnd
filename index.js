const express = require('express');
const bodyparser = require('body-parser');

// Express app
const app = express();

app.use(bodyparser.json());

// Connection from the database
const connection = require('./database/config');

// Schema Modules
const Users = require('./api/users/Users');
const Auth = require('./api/users/Auth');

// Route for getting all user details
app.post('/api/users', (req, res) => {
    let que;
    console.log(req.body);
    // TODO: specify which database
    if (req.body.type === 'usernames') {
        Users.getAllUsernames(connection, req, res);
    } else if (req.body.type === 'allstudents') {
        Users.getAllStudents(connection, req, res);
    } else if (req.body.type === 'allteachers') {
        Users.getAllTeachers(connection, req, res);
    } else {
        res.sendStatus(412);
    }
} );

// TODO : update and fix
// Route for creating databases
app.get('/api/users', (req, res) => {
    console.log(req.body);
    if(req.body.type == 'allstudents'){
        Users.getAllStudents(connection, req, res);
    }else if(req.body.type == 'allteachers'){
        Users.getAllTeachers(connection, req, res);
    }else{
        res.json({"msg":"Welcome"});
    }
} );

// Route for getting user password associated with username or email
app.post('/api/users/auth', (req, res) => {
    if (req.body.type == 'getConfirmation') {
        Auth.getConfirmedUser(connection, req, res);
    } else if (req.body.type == 'signup') {
        Auth.signUpUser(connection, req, res);
    }
} );

// Route for add a new user
app.put('/api/users/auth', (req, res) => {
    Auth.signUpUser(connection, req, res);
} );

// Route for getting specific user
app.get('/api/users/:id', (req, res) => {
    let que = `SELECT Username, Email FROM foxlearn.Student WHERE Std_ID = ${req.params.id} `;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
} );

// connection.end();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
