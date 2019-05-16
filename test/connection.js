var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/mocha_test', {useNewUrlParser: true});
    mongoose.connection
        .once('open', () => {
            console.log("Connected to the mocha_test db!");
            done();
        })
        .on('error', (error) => {
            console.warn('connection error:', err)
        });
});

// Called hooks which runs before something.
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});

after((done) => {
    mongoose.connection.close();
    done();
})