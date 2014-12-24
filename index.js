module.exports = function (input) {

    if(typeof input === 'number') {
        input = input.toString();
    }

    if(typeof input === 'string') {
        if(input.length === 11 && !isNaN(input)){
            return true;
        }
    }

    return false;
};