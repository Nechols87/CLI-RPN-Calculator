const rpn = require('../lib/rpnFunction');

describe('rpn', function () {

    it('should be a function', function () {
        expect(typeof rpn === 'function').toEqual(true);
    });

    it('should compute from Strings', function () {
        expect(rpn('2 2 +')).toEqual(4);
        expect(rpn('2 -2 +')).toEqual(0);
    });

    it('should compute from Arrays', function () {
        expect(rpn([2, 3, '+'])).toEqual(5);
        expect(rpn([2, -3, '*'])).toEqual(-6);
    });

});