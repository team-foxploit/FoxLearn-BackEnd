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
module.exports.getCompleteQuiz = function (connection, req, res) {
    let que = `CALL get_ques('${req.body.Q_ID1}', '${req.body.Q_ID2}', '${req.body.Q_ID3}', '${req.body.Q_ID4}', '${req.body.Q_ID5}');`;
    connection.query(que, (error, result, fields) => {
        if(error){
            res.sendStatus(400);
            return console.error(error.message);
        }
        res.json(result);
    } );
};
