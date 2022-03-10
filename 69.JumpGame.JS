let canJump = function(nums) {
    let maxLength = 0;
    for (let i = 0; i < nums.length - 1; i++)
    {
        if (nums[i] == 0 && maxLength == 0)
        {
            return false;
        }
        if (nums[i] >= maxLength)
        {
            maxLength = nums[i];
        }
        maxLength--;
    }
    return true;
};
let nums = [2,3,1,1,4];
console.log(canJump(nums));