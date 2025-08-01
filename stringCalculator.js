function stringCalculator(str) {
    if (str === '') return 0;
    const nums = str.split(/,|\n/g);
    let sum = 0;
    let negative = [];
    for (let i = 0; i < nums.length; i++) {
        if (+nums[i] < 0) {
            negative.push(nums[i]);
        }
        sum += +nums[i];
    }
    if(negative.length > 0){
        throw new Error(`negative numbers not allowed: ${negative.join(', ')}`);
    }
    return sum;
}
module.exports = stringCalculator