const assert = require('assert');
const User = require('../database/models/Users');

describe('Save records', ()=>{
    it('Saves a record to the db', function(done){

        var user1 = new User({
            firstName: "Dasun",
            lastName: "Surendra",
            userName: "DSStar",
            email: "dasun1996@gmail.com",
            userType: "Student"
        });

        user1.save().then(() => {
            assert(user1.isNew === false);
            done();
        });
    });
});
