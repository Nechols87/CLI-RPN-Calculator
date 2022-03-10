const parse = require('./parser');
const operators = require('./operators');
const tokenize = require('./tokenizer');
const calculate = require('./calculator');

/**
 * Evaluates an expression written in reverse Polish notation.
 *    calc('1 2 +'); // 3
 *    calc('1 2 + 3 -'); // 0
 *
 * String input Arithmetic expression in RPN.
 * Returns {Number}
 */
module.exports = function (input) {
    //rpnCalculator takes input and passes first through parse, then
    //tokenize, and finally if it passes all conditions it runs calculate.
    return calculate(tokenize(parse(input), operators));
};

