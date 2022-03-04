# RPN Calculator

This is an attempt to solve the given imaginary problem.


Context
-----------------

We're building this command-line calculator for people who are comfortable with UNIX-like CLI utilities.
We are starting with the basic 4 operators now but will want to eventually implement other operators and
an alternate interface (such as WebSocket, file, or TCP socket).
There's no need to implement these, but design with these future changes in mind.

Specifications
-----------------

1. The calculator should use standard input and standard output
2. It should implement the four standard arithmetic operators
3. The calculator should handle errors and recover gracefully
4. The calculator should exit when it receives a `q` command or an end of input indicator (EOF / Ctrl+D)

## Installation

Install on your computer
``` npm install```


## Technical Stack

Written in Javascript with few dependencies. Imported readline and chalk for command line flexiblity and to add color. Used Jest to test the functionality and check for errors.

## Usage

Execute with:
```npm start```

## Development

Test with:
```npm test```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Nechols87/CLI-RPN-Calculator. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
