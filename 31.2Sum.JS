let twoSum = function(nums, target) {
    let numberMap = new Map();
    for (let i = 0; i < nums.length; i++) {

        if (numberMap.has(target - nums[i]))
            return [i, numberMap.get(target - nums[i])];
        else
            numberMap.set(nums[i], i);
    }
    return [];
};
let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums,target));