const mocha = require('mocha');
const assert = require('assert');

// Describe some test
describe('some demo test', () =>{
    // Create test
    it('add two numbers', () => {
        assert(2+3 === 5);
    });
});
