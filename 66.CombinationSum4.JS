let combinationSum4 = function(nums, target) {
    let dp = new Array(target + 1).fill(-1);
    return Solve(nums, dp, target);
};
function Solve(nums, dp,sum)
{
    if (sum == 0)
        return 1;

    if (sum < 0)
        return  Number.MAX_SAFE_INTEGER;

    if (dp[sum] != -1)
        return dp[sum];

    let ans = 0;

    for (let i = 0; i < nums.length; i++)
    {
        let res = Solve(nums, dp, sum - nums[i]);
        if (res !=  Number.MAX_SAFE_INTEGER)
            ans += res;
    }

    dp[sum] = ans;
    return ans;
}
let nums = [1,2,3], target = 4
console.log(combinationSum4(nums,target));