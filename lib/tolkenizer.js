/**
 * Tokenizes a list of keys with given operators.
 * maps through the array of keys, eg [ '2', '2', '+' ]
 * returns an array, eg [ 2, 2, [Function: +] ]
 * 
 */
module.exports = function (keys, operators) {
    return keys.map(function (key) {
        return operators[key] || parseFloat(key);
    });
};