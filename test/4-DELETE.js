const expect = require('chai').expect;
const should = require('chai').should();
const User = require('../api/models/User');
const Quiz = require('../api/models/Quiz');

describe('DELETE records', ()=>{
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
            }).catch(error => {
                console.log(error);
            });
    
        });
    
        it('Find by id and delete', function(done){
    
            User.findByIdAndRemove(user._id).then(() => {

                User.findById(user._id).exec().then((result) => {
                    expect(result).to.be.null;
                    // should.not.exist(result); // also correct
                    done();

                })

            });
    
        });

        it('Find by firstName and delete', function(done){
    
            User.findOneAndRemove({firstName:'Dasun'}).then((result) => {
                User.findOne({firstName:'Dasun'}).exec().then((result) => {
                    // expect(result).to.be.null;
                    should.not.exist(result); // also correct
                    done();

                })
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
        it('Find by id and delete', function (done) {

            Quiz.findByIdAndDelete(quiz._id).exec().then(() => {
                
                Quiz.findById(quiz._id).exec().then((result) => {
                    expect(result).to.be.null;
                    done();
                });
                
            });

        });

        it('Find by id and remove', function (done) {

            Quiz.findByIdAndRemove(quiz._id).exec().then(() => {
                
                Quiz.findById(quiz._id).exec().then((result) => {
                    expect(result).to.be.null;
                    done();
                });
                
            });

        });
        
        it('Find by topic and delete', function (done) {

            Quiz.findOneAndDelete({topic: 'Web development'}).exec().then(() => {

                Quiz.findById(quiz._id).exec().then((result) => {
                    should.not.exist(result);
                    done();
                });

            });

        });

        it('Find by topic and remove', function (done) {

            Quiz.findOneAndRemove({topic: 'Web development'}).exec().then(() => {

                Quiz.findById(quiz._id).exec().then((result) => {
                    should.not.exist(result);
                    done();
                });

            });

        });

    });
    
});
