var assert = require('assert');
var fodselsnummer = require('../');

describe('Date of birth', function(){

    it('should return false when invalid month or day', function() {
        assert.equal(false, fodselsnummer('00000000000'));
        assert.equal(false, fodselsnummer('31130000080'));
        assert.equal(false, fodselsnummer('32120000080'));
    });

    it.skip('should return false when invalid day in month', function() {
        assert.equal(false, fodselsnummer('31040000022'));
        assert.equal(false, fodselsnummer('29020000064'));
    });

});