const parser = require('../lib/parser');

describe('parser', function () {

    it('should be a function', function () {
        expect(typeof parser === 'function').toEqual(true);
    });

    it('should throw when called with neither Array nor String', function () {
        [undefined, null, 42, true, false, {}].forEach(function (value) {
            expect(parser.bind(null, value)).toThrow(TypeError, 'invalid input');
        });
    });

    it('should return unmodified ref when called with Array', function () {
        var input = ['1', '2', '+'],
            output = parser(input);
        expect(output).toEqual(input);
        expect(output).toEqual(['1', '2', '+']);
    });

    it('should split String by whitespace and return Array', function () {
        expect(parser('1 2 +')).toEqual(['1', '2', '+']);
        expect(parser('42 12 -')).toEqual(['42', '12', '-']);
        expect(parser('4.2 0 *')).toEqual(['4.2', '0', '*']);
        expect(parser('4.2 0 /')).toEqual(['4.2', '0', '/']);
    });

});