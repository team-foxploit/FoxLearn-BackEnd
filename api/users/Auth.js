// Get all usernames from both teachers and students
module.exports.getConfirmedUser = function (connection, req, res) {
    let que = `SELECT * FROM ${req.body.table} WHERE ${req.body.table}.Username = "${req.body.username}" OR ${req.body.table}.Email = "${req.body.username}"`;
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
    let que = `SELECT * FROM ${req.body.table} WHERE ${req.body.table}.Username = "${req.body.username}" OR ${req.body.table}.Email = "${req.body.username}"`;
    connection.query(que, (error, result, fields) => {
        if(error){
            return console.error(error.message);
            res.end();
        }
        res.json(result);
    } ); 
};

// Sign up a user
module.exports.signUpUser = function (connection, req, res) {
    let que = `INSERT INTO ${req.body.table}(FName, LName, Email, Username, PSWRD) VALUES("${req.body.fname}", "${req.body.lname}", "${req.body.email}", "${req.body.username}", "${req.body.password}")`;
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