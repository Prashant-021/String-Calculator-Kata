function stringCalculator(str) {
    if (str === '') return 0;

    let delimiter = /,|\n/;
    let numbers = str;

    if (str.startsWith('//')) {
        const delimiterLineEnd = str.indexOf('\n');
        const customDelimiter = str.slice(2, delimiterLineEnd);
        delimiter = customDelimiter
        numbers = str.slice(delimiterLineEnd + 1)
    }
    const nums = numbers.split(delimiter);

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