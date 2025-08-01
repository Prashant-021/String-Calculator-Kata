function stringCalculator(str) {
    if (str === '') return 0;
    const nums = str.split(/,|\n/g)
    console.log(nums);
    let sum = 0
    for(let i = 0 ; i < nums.length ; i++){
        sum += +nums[i]
    }
    return sum
}
console.log(stringCalculator("1\n2,3"))
module.exports = stringCalculator