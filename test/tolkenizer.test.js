const tokenize = require('../lib/tolkenizer');

describe('tokenize', function () {

    it('should be a function', function () {
        expect(typeof tokenize === 'function').toEqual(true);
    });

    it('should map numbers to numeric strings in input', function () {
        var output = tokenize(['-1', '0', '1.1'], {});
        expect(output).toEqual([-1, 0, 1.1]);
    });

    it('should support scientific notation', function () {
        var output = tokenize(['1e1', '-1e1', '1e+2', '1e-2'], {});
        expect(output).toEqual([10, -10, 100, 0.01]);
    });

    it('should map operators to keys', function () {
        var output = tokenize(['x'], {x: 'foo'});
        expect(output).toEqual(['foo']);
    });

});