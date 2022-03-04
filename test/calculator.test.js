const calculate = require('../lib/calculator');

describe('calculate', function () {

    it('should be a function', function () {
        expect(typeof calculate === 'function').toEqual(true);
    });

    it('should return value returned by operator', function () {
        var result = calculate([1, 2, function () { return 'foo'; }]);
        expect(result).toEqual('foo');
    });

});