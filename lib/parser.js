/**
 * Parses a expression written in reverse Polish notation.
 * CLI input, e.g. `'2 2 +'`.
 * Actual input, e.g. `['2', '2', '+']`.
 */
module.exports = function (input) {
    if (typeof input === 'string') {
        input = input.split(/\s+/);
    }    
    else if (!Array.isArray(input)) {
        throw new TypeError('invalid input');
    }
    return input;
};