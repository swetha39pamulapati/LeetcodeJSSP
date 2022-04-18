let canPartition = function(nums) {
    let sum = 0;
    let len = nums.length;
    for(let i = 0; i<len; i++)
        sum += nums[i];

    if (sum % 2 != 0)
        return false;


    let target = sum / 2;
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < len; i++)
    {
        for (let j = target; j >= 0; j--)
        {
            if (j >= nums[i] && dp[j - nums[i]])
                dp[j] = true;
        }
    }
    return dp[target];
};
let nums = [1,5,11,5];
console.log(canPartition(nums));