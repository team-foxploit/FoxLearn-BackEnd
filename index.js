const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

// Express app
const app = express();

app.use(cors());

app.use(bodyparser.json());

// Connection from the database
const connection = require('./database/config');

// Schema Modules
const Users = require('./api/users/Users');
const Auth = require('./api/users/Auth');
const QuizViews = require('./api/quizdatabase/QuizViews');
const SubmitQuiz = require('./api/quizdatabase/SubmitQuiz');

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

// Route for sign up a new user
app.put('/api/users/auth', (req, res) => {
    if(req.body.table === 'Student'){
        Auth.signUpStudent(connection, req, res);
    }else if(req.body.table === 'Teacher'){
        Auth.signUpTeacher(connection, req, res);
    }
} );

// Route for getting specific user
app.get('/api/users/:id', (req, res) => {
    let que = `SELECT Username, Email FROM foxlearn.Student WHERE Std_ID = ${req.params.id} `;
    connection.query(que, (error, results, fields) => {
        if (error) {
            res.sendStatus(400);
            return console.error(error.message);
        }
        res.json(results);
    });
} );

// Route for getting one question
app.get('/api/quiz', (req, res) => {
    QuizViews.getOneQuestion(connection, req, res);
} );

// Route for getting complete quiz
app.post('/api/quiz', (req, res) => {
    let id_que = `SELECT Ques_ID FROM foxlearn.Question;`;
    let ids = [];
    connection.query(id_que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        results.forEach( (item) => {
            ids.push(item.Ques_ID);
        });
        let i = 0;
        let randomIDs = [];
        while(i < 5){
            var item = ids[Math.floor(Math.random()*ids.length)];
            if (randomIDs.includes(item)) {
                continue;
            } else {
                randomIDs.push(item);
                i++;
            }
        }
        QuizViews.getCompleteQuiz(connection, randomIDs, res);
    });
} );

// Route for creating a quiz
app.put('/api/quiz/create', (req, res) => {
    SubmitQuiz.submitQuiz(connection, req, res);
});

// Route for selecting sub IDs
app.get('/api/quiz/IDs', (req, res) => {
    QuizViews.getSubjectIDs(connection, req, res);
});

// connection.end();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
