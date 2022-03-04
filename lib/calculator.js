/**
 * Evaluates a list of tokens using basic RPN algorithm.
 * Throws TypeError if at least one of tokens is invalid.
 * Throws Error if there are not enough values, e.g. `2 +`.
 * Throws Error if there are too many values, e.g. `1 2 3 +`.
 */
module.exports = function (tokens) {
    //console.log(tokens)
    // minimum number of arguments or operands for length of array
    const numberOfValues = 2, 
        stack = [];

    tokens.forEach(function (token) {
        if (typeof token === 'number' && !isNaN(token)) {
            stack.push(token);
        } else if (typeof token === 'function') {
            if (stack.length < numberOfValues) {
                throw new Error('not enough values');
            }
            stack.push(token.apply(null, stack.splice(-2)));
        } else {
            console.log(`You have entered something that is not a number`) 
            throw new TypeError(`invalid input`);
        }
    });

    if (stack.length !== 1) {
        throw new Error('too many values');
    }

    return stack[0];

};