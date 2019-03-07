const assert = require('assert');
const User = require('../database/models/Users');

describe('Find records', ()=>{

    beforeEach((done) => {
        var user1 = new User({
            firstName: "Dasun",
            lastName: "Surendra",
            userName: "DSStar",
            email: "dasun1996@gmail.com",
            userType: "Student"
        });

        user1.save().then(() => {
            done();
        });

    });

    it('Finds one record from the db', function(done){
        User.findOne({firstName:'Dasun'}).then((result) => {
            assert(result.firstName === 'Dasun');
            done();
        });
    });
});
