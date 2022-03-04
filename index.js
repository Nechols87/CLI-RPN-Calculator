#!/usr/bin/env node

const readline = require('readline');
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

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let inputNumbers = [];

r1.question('Would you like to use the calculator? y/n \n', (input) => {
    if(input !== 'y') {
        console.log('Come back anytime!') 
        r1.close();
    }    
    else { 
        r1.on('line', (input) => {
            if(input === 'q') r1.close();
            if(input === 'clear'){
                inputNumbers.splice(0)
                console.log('cleared')
            }
            else {
                input = input.split(/\s+/);
                inputNumbers.push(...input)

                if(inputNumbers.length > 2) {
                    if(input[input.length - 1] === '+' || input[input.length - 1] === '-' ||input[input.length - 1] === '*' ||input[input.length - 1] === '/') {
                       result = rpnCalculator(inputNumbers)
                       console.log(result)
                       inputNumbers.splice(0)
                       inputNumbers = [result]
                    }
                } 
            }
            
        })
    }      
});



//console.log(rpnCalculator(process.argv.slice(2)))

// program
//     .version('1.0.0');

// program
//     .command('calculate')
//     .alias('RPN Calculator')
//     .description('Please use operators + , - , x , or /')
//     .action(console.log(rpnCalculator(process.argv.slice(2))));


// program
//     .command('Calculator')
//     .description('Please use operators + , - , x , / - RPN Calculators are a little different Ex: 2 2 + will equal 4')
//     .action(console.log(rpnCalculator(process.argv.slice(2))))

//program.parse(process.argv)
//console.log(rpnCalculator(process.argv.slice(2)));