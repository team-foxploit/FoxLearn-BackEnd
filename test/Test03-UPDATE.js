const assert = require('chai').assert;
const User = require('../api/models/User');
const Quiz = require('../api/models/Quiz');

describe('UPDATE records', ()=>{
    describe('USER', () => {
        var user;

        // BEFORE EACH
        beforeEach((done) => {
            user = new User({
                firstName: "Dasun",
                lastName: "Surendra",
                userName: "DSStar",
                password: "somepassword",
                email: "dasun1996@gmail.com",
                userType: "Student"
            });
    
            user.save().then(() => {
                done();
            });
    
        });
    
        // TESTS
        it('Find by id and update', function(done){

            const newValues = {
                firstName: 'Kasun'
            }
    
            User.findByIdAndUpdate( user._id  , newValues).then(() => {

                User.findById(user._id).exec().then((result) => {
                    assert.equal(result.firstName, 'Kasun');
                    done();
                });

            });
            
        });

        it('Find by firstName and update', function(done){

            const newValues = {
                lastName: 'Sumeda'
            }
    
            User.findOneAndUpdate({ firstName: 'Dasun' }, newValues).then(() => {

                User.findOne({ firstName: 'Dasun' }).exec().then((result) => {
                    assert.equal(result.lastName, 'Sumeda');
                    done();
                });

            });
            
        });

    });
    
    describe('QUIZ', () => {
        var quiz;

        // BEFORE EACH
        beforeEach((done) => {
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

            quiz.save().then(() => {
                done();
            });

        });

        // TESTS
        it('Find by id and update', function (done) {

            const newValues = {
                author: "Leah",
                difficulty: "Hard",
            }

            Quiz.findByIdAndUpdate(quiz._id, newValues).exec().then(() => {
                
                Quiz.findById(quiz._id).exec().then((result) => {
                    assert.equal(result.author, 'Leah');
                    done();
                });
                
            });

        });
        
        it('Find by topic and update', function (done) {

            const newValues = {
                difficulty: "Hard",
            }

            Quiz.findOneAndUpdate({topic: 'Web development'}, newValues).exec().then(() => {

                Quiz.findById(quiz._id).exec().then((result) => {
                    assert.equal(result.difficulty, 'Hard');
                    done();
                });

            });

        });

    });
    
});
