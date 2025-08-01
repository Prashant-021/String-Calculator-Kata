const stringCalculator = require('./stringCalculator');

test('empty string returns 0', () => {
    expect(stringCalculator('')).toBe(0);
})