# fodselsnummer [![Build Status](https://travis-ci.org/Andersos/fodselsnummer.svg)](https://travis-ci.org/Andersos/fodselsnummer) [![Coverage Status](https://coveralls.io/repos/Andersos/fodselsnummer/badge.png?branch=master)](https://coveralls.io/r/Andersos/fodselsnummer?branch=master) [![Code Climate](https://codeclimate.com/github/Andersos/fodselsnummer/badges/gpa.svg)](https://codeclimate.com/github/Andersos/fodselsnummer)

National identification number of Norway

## Usage

```javascript
fnr = require('fodselsnummer');

// Validates
fnr(11108900123)
fnr('11108900123');

// Generates valid fnr
fnr.generate(new Date());
fnr.generate(111089000);

// Query for info
var fnr = new Fodselsnummer('11108900123');

fnr.getBirthDate();
fnr.getGender();

```

## Rules
The rules are defined here https://lovdata.no/dokument/SF/forskrift/2007-11-09-1268/KAPITTEL_2

## License

MIT © [Anders Olsen Sandvik](http://andersos.net)
