// Get all students
module.exports.getAllStudents = function (connection, req, res) {
    let que = `SELECT * FROM Student`;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log('in the all students');
        res.send(results);
    });
};

// Get all teachers
module.exports.getAllTeachers = function (connection, req, res) {
    let que = `SELECT * FROM Teacher`;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log('in the all teachers');
        res.send(results);
    });
};

// Get all usernames from both teachers and students
module.exports.getAllUsernames = function (connection, req, res) {
    // let que = `SELECT s.Email, s.Username, t.Email, t.Username FROM student s, teacher t `;
    let que = `SELECT Email, Username FROM student`;
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log('in the all usernames');
        res.send(results);
    });
};
