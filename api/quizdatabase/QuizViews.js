// Get all usernames from both teachers and students
module.exports.getOneQuestion = function (connection, req, res) {
    let que = `CALL get_Quiz('${req.body.Q_ID}', '${req.body.Subject}', '${req.body.Difficulty}');`;
    connection.query(que, (error, result, fields) => {
        if(error){
            res.sendStatus(400);
            return console.error(error.message);
        }
        res.json(result);
    } );
};
