# RPN Calculator

This is an attempt to solve the given imaginary problem.


Context
-----------------

I built a command-line calculator for people who are comfortable with UNIX-like CLI utilities.
I've started with the basic 4 operators now but will want to eventually implement other operators and
an alternate interface (such as WebSocket, file, or TCP socket).


Specifications
-----------------

The calculator should has standard input and standard output
It implement the arithmetic operators '+', '-', '*', and '/'
The calculator handles errors and recover gracefully
The calculator should exit when it receives a `q` command or an end of input indicator (EOF / Ctrl+D)
There is a password to access the calculator. The password is 'takehome'
I used a recersive function to keep continuous functionality from the calculator until the person exits out. 
If someone wants clear their current equation and start over they can enter 'clear' and it will provide a clean start

## Installation

Install on your computer
``` npm install```

Install globally
```npm link ```

## Technical Stack

Written in Javascript with few dependencies. Imported readline and chalk for command line flexiblity and to add color. Used Jest to test the functionality and check for errors. Used Travis CI to automate building and testing code changes, providing immediate feedback on the success of the change. Containerized with Docker. If application has a complicated setup and installation process then Docker can be very helpful. There are often language-specific alternatives to this approach, but using Docker as a distribution mechanism can work for most anything you can install within a Linux container.

## Usage

Execute with:
```npm start or cli-rpn```

Run in Docker:
```
docker run -it cli-rpn
```

## Development

Test with:
```npm test```


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Nechols87/CLI-RPN-Calculator. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
