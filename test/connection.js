var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

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
        // console.log("Db deleted [users]");
        done();
    });
});
beforeEach((done) => {
    mongoose.connection.collections.quizzes.drop(() => {
        // console.log("Db deleted [quizzes]");
        done();
    });
});

after((done) => {
    mongoose.connection.close();
    done();
})