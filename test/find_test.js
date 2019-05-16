const assert = require('assert');
const User = require('../api/models/User');

describe('Find records', ()=>{

    beforeEach((done) => {
        var user1 = new User({
            firstName: "Dasun",
            lastName: "Surendra",
            userName: "DSStar",
            password: "somepassword",
            email: "dasun1996@gmail.com",
            userType: "Student"
        });

        user1.save().then(() => {
            done();
        }).catch(error => {
            console.log(error);
        });

    });

    it('Finds one record from the db', function(done){
        User.findOne({firstName:'Dasun'}).then((result) => {
            assert(result.firstName === 'Dasun');
            done();
        }).catch((error) => {
            assert(false);
            console.log(error);
        });
    });
});
