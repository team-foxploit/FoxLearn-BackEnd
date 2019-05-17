const assert = require('chai').assert;
const User = require('../api/models/User');
const Quiz = require('../api/models/Quiz');

describe('READ records', ()=>{

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
        it('Find by id', function(done){

            User.findById(user._id).then((result) => {
                assert.equal(result._id.toString(), user._id.toString());
                done();
            });

        });

        it('Find by firstName', function(done){

            User.findOne({firstName:'Dasun'}).then((result) => {
                assert.equal(result.firstName, 'Dasun');
                done();
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
        it('Find by id', function (done) {
            Quiz.findById(quiz._id).exec()
            .then((result) => {
                assert.equal(result._id.toString(), quiz._id.toString());
                done();
            });
        });

        it('Find by author', function (done) {
            Quiz.findOne({author: 'Luke'}).exec()
            .then((result) => {
                assert.equal(result.author, 'Luke');
                done();
            });
        });

    });
    
});
