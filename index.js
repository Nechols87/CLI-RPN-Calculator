#!/usr/bin/env node

const readline = require('readline');
const chalk = require('chalk')
const rpnCalculator = require('./lib/rpnFunction');
const { version } = require('./package.json')


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//store values as they are inputed
let inputNumbers = [];

const recursiveAsyncReadLine = () => {
    //Asks if they want to use calculator.
    r1.question(chalk.blue('Would you like to use the calculator? y/n \nWould you like the version? version\nWould you like a description of the calculator? des\n'), (input) => {
        if(input === 'q') r1.close();
        else if(input === 'version'){
            console.log(`v${version}`);
            recursiveAsyncReadLine(); //Calling this function again to ask new question
        }
        else if(input === 'des'){
            console.log(`RPN stands for Reverse Polish Notation (Reverse Polish Notation) and has been developed in 1920 by Jan Lukasiewicz. \nRPN is a method to write a mathematical expression without round or square brackets. \n1 + 2 = 3 === calculator('1 2 +')\n1 + 2 - 3 = 0 === calculator('1 2 + 3 -')\n(1 + 2) * 3 = 9 === calculator('1 2 + 3 *')`)
            recursiveAsyncReadLine();
        }
        else if(input !== 'y') {
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
}
recursiveAsyncReadLine();
