const assert = require('chai').assert;
const User = require('../api/models/User');
const Quiz = require('../api/models/Quiz');

describe('CREATE records', ()=>{
    
    describe('USER', () => {
        var user;
        it('Saves an user record to the db', function(done){
            
            user = new User({
                firstName: "Dasun",
                lastName: "Surendra",
                userName: "DSStar",
                password: "somepassword",
                email: "dasun1996@gmail.com",
                userType: "Student"
            });
    
            user.save().then((result) => {
                assert.equal(result.firstName, 'Dasun');
                done();
            });
    
        });
    })
    
    describe('QUIZ', () => {
        var quiz;
        it('Saves a quiz record to the db', function(done){
        
            quiz = new Quiz({
                topic: "Web development",
                tags: [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                questionSet: [
                        {
                            "question": "What is the question1?",
                            "answers": [
                                "Answer 1",
                                "Answer 3",
                                "Answer 2",
                                "Answer 4"
                            ],
                            "correctAnswer": 2
                        },
                        {
                            "question": "What is the question1?",
                            "answers": [
                                "Answer 1",
                                "Answer 3",
                                "Answer 2",
                                "Answer 4"
                            ],
                            "correctAnswer": 2
                        },
                        {
                            "question": "What is the question1?",
                            "answers": [
                                "Answer 1",
                                "Answer 3",
                                "Answer 2",
                                "Answer 4"
                            ],
                            "correctAnswer": 2
                        }
                ],
                difficulty: "Medium",
                author: "Luke",
                createdDate: new Date(),
            });

            quiz.save().then((result) => {
                assert.equal(result.topic, 'Web development');
                done();
            });
    
        });
    })
    
});
