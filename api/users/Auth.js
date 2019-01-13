// Get all usernames from both teachers and students
module.exports.getConfirmedUser = function (connection, req, res) {
    let que = `SELECT * FROM ${req.body.table} WHERE ${req.body.table}.Username = '${req.body.username}' OR ${req.body.table}.Email = '${req.body.username}'`;
    connection.query(que, (error, result, fields) => {
        if(error){
            return console.error(error.message);
            res.end();
        }
        res.json(result);
    } );
};

// Get all usernames from both teachers and students
module.exports.updateUser = function (connection, req, res) {
    let que = `SELECT * FROM ${req.body.table} WHERE ${req.body.table}.Username = '${req.body.username}' OR ${req.body.table}.Email = '${req.body.username}'`;
    connection.query(que, (error, result, fields) => {
        if(error){
            return console.error(error.message);
            res.end();
        }
        res.json(result);
    } );
};

// Sign up a Student user
module.exports.signUpStudent = function (connection, req, res) {
    let que = `CALL insert_student('${req.body.First_Name}', '${req.body.Last_Name}', '${req.body.Password}', '${req.body.Email}', '${req.body.Username}');`
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        if(results.affectedRows == 1){
            res.json({status:"success"});
        }else{
            res.sendStatus(400);
        }
    });
};

// Sign up a Teacher user
module.exports.signUpTeacher = function (connection, req, res) {
    let que = `CALL insert_teacher('${req.body.First_Name}', '${req.body.Last_Name}', '${req.body.Password}', '${req.body.Email}', '${req.body.Username}');`
    connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        if(results.affectedRows == 1){
            res.json({status:"success"});
        }else{
            res.sendStatus(400);
        }
    });
};
