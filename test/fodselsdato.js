var assert = require('assert');
var fodselsnummer = require('../');

describe('Date of birth', function(){

    it('should return false when invalid month or day', function() {
        assert.equal(false, fodselsnummer('00000000000'));
        assert.equal(false, fodselsnummer('31130000080'));
        assert.equal(false, fodselsnummer('32120000080'));
        assert.equal(false, fodselsnummer('00120000080'));
    });

    it('should return false when invalid day in month', function() {
        assert.equal(false, fodselsnummer('31040000022'));
        assert.equal(false, fodselsnummer('29020100064'));
    });

    it('should return true on leap year', function() {
        assert.equal(true, fodselsnummer('29021600069'));
        assert.equal(true, fodselsnummer('29020050064'));
    });

    it('should return false for leap year in different millenia (1900)', function() {
        assert.equal(false, fodselsnummer('29020000069'));
    });

});