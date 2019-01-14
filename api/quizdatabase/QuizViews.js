// Get one question, associated answers and correct answer
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

// Get complete quiz with answers and correct answers
module.exports.getCompleteQuiz = function (connection, ID, res) {
    let que = `CALL get_ques('${ID[0]}', '${ID[1]}', '${ID[2]}', '${ID[3]}', '${ID[4]}');`;
    connection.query(que, (error, result, fields) => {
        if(error){
            res.sendStatus(400);
            return console.error(error.message);
        }
        res.json(result);
    } );
};
