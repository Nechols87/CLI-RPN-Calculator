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

r1.question('What would you like to calculate? \n', (input) => {
    if(input === 'q') r1.close();
    else if (typeof input === 'string') {
        input = input.split(/\s+/);
        if(input.length === 1) {
            if(inputNumbers.length < 3) {
              inputNumbers.push(input)
              console.log(input)

              r1.on('line', (input) => {
                if(input === '+' || input === '-' ||input === '*' ||input === '/'){
                    inputNumbers.push(input)
                    result = rpnCalculator(inputNumbers)
                    console.log(result)
                    inputNumbers.splice(0)
                    inputNumbers = [result]
                    console.log(inputNumbers)
                } else {
                    if(input === 'q') r1.close();
                    else{
                      inputNumbers.push(input)
                      console.log(inputNumbers)
                    }
                }
              })
            }  
        } else {
            if(input === 'q') r1.close();
            result = rpnCalculator(input)
            console.log(result)
            inputNumbers = [result]
            console.log(inputNumbers)
            
            r1.on('line', (input) => {
                if(input[input.length - 1] === '+' || input[input.length - 1] === '-' ||input[input.length - 1] === '*' ||input[input.length - 1] === '/'){
                    input = input.split(/\s+/);
                    console.log(input)
                    console.log(inputNumbers)
                    inputNumbers.push(input)
                    console.log(`test ${Array.isArray(inputNumbers)}`)
                    result = rpnCalculator(inputNumbers)
                    console.log(result)
                    inputNumbers.splice(0)
                    inputNumbers = [result]
                    console.log(inputNumbers)
                } else {
                    if(input === 'q') r1.close();
                    else{
                      inputNumbers.push(input)
                      console.log(inputNumbers)
                    }
                }
              })
        }
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