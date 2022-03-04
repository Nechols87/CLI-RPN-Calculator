#!/usr/bin/env node

const readline = require('readline');
const chalk = require('chalk')
const rpnCalculator = require('./lib/rpnFunction');


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//store values as they are inputed
let inputNumbers = [];

//Asks if they want to use calculator.
r1.question(chalk.blue('Would you like to use the calculator? y/n \n'), (input) => {
    if(input !== 'y') {
        console.log(chalk.blue('Come back anytime!'))
        r1.close();
    }    
    else { //Will loop through until they quit. Can clear and start over at anytime
        r1.on('line', (input) => {
            if(input === 'q') r1.close();
            if(input === 'clear'){
                inputNumbers.splice(0)
                console.log(chalk.green('cleared'))
            }
            else {
                input = input.split(/\s+/);
                inputNumbers.push(...input)

                if(inputNumbers.length > 2) {
                    if(input[input.length - 1] === '+' || input[input.length - 1] === '-' ||input[input.length - 1] === '*' ||input[input.length - 1] === '/') {
                       const result = rpnCalculator(inputNumbers)
                       console.log(chalk.yellow(result))
                       inputNumbers.splice(0)
                       inputNumbers = [result]
                    }
                } 
            }
            
        })
    }      
});
