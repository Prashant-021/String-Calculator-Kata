function stringCalculator(str) {
    if (str === '') return 0;
    const nums = str.split(',')
    let sum = 0
    for(let i = 0 ; i < nums.length ; i++){
        sum += +nums[i]
    }
    return sum
}
module.exports = stringCalculator