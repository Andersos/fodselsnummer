var assert = require('assert');
var fodselsnummer = require('../');

describe('Fodselsnummer', function(){

    it('should return false when input is of invalid type', function() {
        assert.equal(false, fodselsnummer(undefined));
        assert.equal(false, fodselsnummer(null));
        assert.equal(false, fodselsnummer([]));
        assert.equal(false, fodselsnummer({}));
        assert.equal(false, fodselsnummer(false));
        assert.equal(false, fodselsnummer(true));
    });

    it('should return true when valid number fodselsnummer is passed', function(){
        assert.equal(true, fodselsnummer(11108900123));
    });

    it('should return true when valid string fodselsnummer is passed', function(){
        assert.equal(true, fodselsnummer('11108900123'));
    });

    it('should return false when input is not valid length', function(){
        assert.equal(false, fodselsnummer('0'));
        assert.equal(false, fodselsnummer(0));
        assert.equal(false, fodselsnummer('0101010100601'));
        assert.equal(false, fodselsnummer(010101010060));
    });

    it('should return false when input is not nummerical', function(){
        assert.equal(false, fodselsnummer('Just a strg'));
        assert.equal(false, fodselsnummer('ä©™£€📲♔💩'));
    });

});