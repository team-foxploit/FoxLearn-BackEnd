const assert = require('assert');
const User = require('../api/models/User');

describe('UPDATE records', ()=>{
    var user1;
    beforeEach((done) => {
        user1 = new User({
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

    it('Finds one record from the db and update it', function(done){
        const newvalues = {
            firstName: 'Kasun'
        }

        User.findByIdAndUpdate( user1._id  , newvalues).then(() => {
            User.findById(user1._id)
            .then((result) => {
                assert(result.firstName === 'Kasun');
                done();
            })
            .catch((error) => {
                console.log(error);
                assert(false);
            })
        });
        
    });
    
});
