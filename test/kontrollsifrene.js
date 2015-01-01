var assert = require('assert');
var fodselsnummer = require('../');

describe('Kontrollsifrene', function(){

    it.skip('should return false when invalid', function() {
        assert.equal(false, fodselsnummer('01010100100'));
    });

});