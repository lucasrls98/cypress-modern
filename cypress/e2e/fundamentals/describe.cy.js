const { it } = require("mocha");

describe('Should group tests', () => {
    describe('More specific Tests', () => {
        it('Internal Test', () => {
            
        });
        it.skip('Internal Test 02', () => {
            
        });
        it.only('Only this Test will be executed', () => {
            
        });
        
    });
});