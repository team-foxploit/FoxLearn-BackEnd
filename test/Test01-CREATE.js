const assert = require('assert');
const User = require('../api/models/User');

describe('CREATE records', ()=>{

    it('Saves a record to the db', function(done){
        
        var user1 = new User({
            firstName: "Dasun",
            lastName: "Surendra",
            userName: "DSStar",
            password: "somepassword",
            email: "dasun1996@gmail.com",
            userType: "Student"
        });

        user1.save().then((result) => {
            assert(result.firstName === "Dasun");
            done();
        }).catch((error) => {
            assert(false);
            console.log(error);
        });

    });

});
