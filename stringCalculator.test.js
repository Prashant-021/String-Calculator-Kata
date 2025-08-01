const stringCalculator = require('./stringCalculator');

// Function to generate a test case Title
const generateTestCaseTitle = (input, expected) => {
    return `string "${input}" should return ${expected}`;
}

test('empty string returns 0', () => {
    expect(stringCalculator('')).toBe(0);
})

describe('string with one number', () => {
    test(generateTestCaseTitle('5', 5), () => {
        expect(stringCalculator('5')).toBe(5);
    })

    test(generateTestCaseTitle('10', 10), () => {
        expect(stringCalculator('10')).toBe(10);
    })
})

