const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
before(function(done){
    // mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
    mongoose.connect('mongodb://heroku_65j68qcv:8aruocin3bmr0aps9sn5ijm7n6@ds161345.mlab.com:61345/heroku_65j68qcv', {useNewUrlParser: true});
    console.log("in connection file");
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log("connected to the database: heroku_65j68qcv");
        done();
    });
});

// Dropping each collection
beforeEach(function(done) {
    // Drop the users collection
    db.collections.users.drop(() => {
        done();
    })
})
