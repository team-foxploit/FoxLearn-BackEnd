// Submit a QUESTION:
module.exports.submitQuiz = function (connection, req, res) {
    console.log(req.body);
    let que = `CALL submitQuiz('${req.body.ANS.correctAns}', '${req.body.QUEST.question}', '${req.body.QUEST.subject}', '${req.body.Tch_ID}', '${req.body.QUEST.difficulty}', '${req.body.ANS.ans1}', '${req.body.ANS.ans2}', '${req.body.ANS.ans3}', '${req.body.ANS.ans4}');`;
    connection.query(que, (error, result, fields) => {
        if(error){
            res.sendStatus(400);
            return console.error(error.message);
        }
        if(results.affectedRows == 1){
            res.json({status:"success"});
        }else{
            res.sendStatus(400);
        }
    } );
};
