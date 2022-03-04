#!/usr/bin/env node

const { program } = require('commander')
//const chalk = require('chalk')
const parse = require('./lib/parser');
const operators = require('./lib/operators');
const tokenize = require('./lib/tolkenizer');
const calculate = require('./lib/calculator');

/**
 * Evaluates an expression written in reverse Polish notation.
 *    calc('1 2 +'); // 3
 *    calc('1 2 + 3 -'); // 0
 *
 * String input Arithmetic expression in RPN.
 * Returns {Number}
 */
const rpnCalculator = (input) => {
    //rpnCalculator takes input and passes first through parse, then
    //tokenize, and finally if it passes all conditions it runs calculate.
    return calculate(tokenize(parse(input), operators));
};

program
    .version('1.0.0');

program
    .command('calculate')
    .alias('RPN Calculator')
    .description('Please use operators + , - , x , or /')
    .action(console.log(rpnCalculator(process.argv.slice(2))));


// program
//     .command('Calculator')
//     .description('Please use operators + , - , x , / - RPN Calculators are a little different Ex: 2 2 + will equal 4')
//     .action(console.log(rpnCalculator(process.argv.slice(2))))

program.parse(process.argv)
//console.log(rpnCalculator(process.argv.slice(2)));