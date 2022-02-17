var containsDuplicate = function ( nums ) {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
};

let arr = [-2,1,-3,4,-1,2,1,-5,4];
let data = containsDuplicate(arr);
console.log(data);