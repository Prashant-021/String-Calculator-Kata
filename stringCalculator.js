function stringCalculator(str) {
    if (str === '') return 0;

    let delimiter = ',|\n';
    let customDelimiter = null;
    let numbers = str;

    if (str.startsWith('//')) {
        const delimiterLineEnd = str.indexOf('\n');
        customDelimiter = str.slice(2, delimiterLineEnd)
        numbers = str.slice(delimiterLineEnd + 1)
    }
    const nums = numbers.split(new RegExp(customDelimiter ? delimiter + '|' + customDelimiter : delimiter));

    let sum = 0;
    let negative = [];
    for (let i = 0; i < nums.length; i++) {
        if (+nums[i] < 0) {
            negative.push(nums[i]);
        }
        sum += +nums[i];
    }
    if (negative.length > 0) {
        throw new Error(`negative numbers not allowed: ${negative.join(', ')}`);
    }
    return sum;
}
module.exports = stringCalculator