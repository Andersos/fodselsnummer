module.exports = function (input) {

    if (typeof input === 'number') {
        input = input.toString();
    }

    if (typeof input === 'string') {
        if (input.length === 11 && !isNaN(input) &&
            isValidDOB(input.slice(0,2), input.slice(2,4), input.slice(4,6))) {
                return true;
            }
        }

        return false;
    };

    function isValidDOB(d, m, y) {
        if(m > 0 && m < 13) {
            if(d > 0 && d < 32){
                return true;
            }
        }
        return false;
    }