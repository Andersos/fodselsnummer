module.exports = function (input) {

    if (typeof input === 'number') {
        input = input.toString();
    }

    if (typeof input === 'string') {
        if (input.length === 11 &&
            isValidFodselsdato(
                input.slice(0,2),
                input.slice(2,4),
                getYearBorn(parseInt(input.slice(4,6), 10),
                parseInt(input.slice(6,9), 10)))) {
                return true;
            }
        }
        return false;
    };

    function isValidFodselsdato(d, m, y) {
        if(['01','03','05','07','08','10','12'].indexOf(m) > -1){
            return inRange(d, 31);
        } else if (['04','06','09','11'].indexOf(m) > -1) {
            return inRange(d, 30);
        } else if (m === '02') {
            var leapYearDays = ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) ? 29 : 28;
            return inRange(d, leapYearDays);
        } else {
            return false;
        }
    }

    function inRange(day, max) {
        return day > 0 && day <= max;
    }

    function getYearBorn(year, individ) {
        return individ < 500 ? year + 1900 : year + 2000;
    }