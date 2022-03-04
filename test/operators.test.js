const operators = require('../lib/operators');

describe('operators', function () {

    it('should be an object', function () {
        expect(typeof operators === 'object').toEqual(true);
    });

    // Arithmetic operators:

    it('should have a `+` method that sums', function () {
        expect(operators).toHaveProperty('+');
        expect(typeof operators['+']).toBe('function');
        expect(operators['+'](1, 2)).toEqual(3);
    });

    it('should have a `-` method that subtracts', function () {
        expect(operators).toHaveProperty('-');
        expect(typeof operators['-']).toBe('function');
        expect(operators['-'](1, 2)).toEqual(-1);
    });

    it('should have a `*` method that multiplies', function () {
        expect(operators).toHaveProperty('*');
        expect(typeof operators['*']).toBe('function');
        expect(operators['*'](2, 3)).toEqual(6);
    });

    it('should have a `/` method that divides', function () {
        expect(operators).toHaveProperty('/');
        expect(typeof operators['/']).toBe('function');
        expect(operators['/'](7, 2)).toEqual(3.5);
    });

});