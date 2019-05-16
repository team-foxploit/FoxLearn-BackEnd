const assert = require('assert');

// Describe some test
describe('TEMPLATE test', function(){

    beforeEach((done) => {
        // Do something here
        done();
    });

    // Create test
    it('add two numbers', function(done){
        assert(2+3 === 5);
        done();
    });
});
