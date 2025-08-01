const stringCalculator = require('./stringCalculator');

// Function to generate a test case Title
const generateTestCaseTitle = (input, expected) => {
    return `string "${input}" should return ${expected}`;
}

test('empty string returns 0', () => {
    expect(stringCalculator('')).toBe(0);
})

describe('string with one number', () => {
    const testCases = [['3', 3], ['5', 5]]

    testCases.forEach(([input, expected]) => {
        test(generateTestCaseTitle(input, expected), () => {
            expect(stringCalculator(input)).toBe(expected);
        })
    })
})

describe('string with two or more numbers', () => {
    const testCases = [['1,2', 3], ['1,4',5], ['1,3,4', 8]]

    testCases.forEach(([input, expected]) => {
        test(generateTestCaseTitle(input, expected), () => {
            expect(stringCalculator(input)).toBe(expected);
        })
    })
})

