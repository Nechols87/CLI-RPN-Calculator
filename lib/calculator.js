const chalk = require('chalk')

/**
 * Evaluates a list of tokens using basic RPN algorithm.
 * Console logs error if at least one of tokens is invalid.
 */
module.exports = function (tokens) {
    const stack = [];

    tokens.forEach(function (token) {
        if (typeof token === 'number' && !isNaN(token)) {
            stack.push(token);
        } else if (typeof token === 'function') {
            stack.push(token.apply(null, stack.splice(-2)));
        } else {
            console.log(chalk.red(`You have entered something that is not a number\nPlease press clear and start again`))
        }
    });
    return stack[0];
};