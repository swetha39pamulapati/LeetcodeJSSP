let findNumberOfLIS = function(nums) {

    if (nums.length == 0)
        return 0;
    let dp = new Array(nums.length).fill(1);
    let numberOfLisAtIndex = new Array(nums.length).fill(1);
    let maxLen = 1;
    for (let i = 1; i < nums.length; i++)
    {
        for (let j = 0; j < i; j++)
        {
            if (nums[j] < nums[i])
            {
                if (dp[j] + 1 > dp[i])
                {
                    dp[i] = dp[j] + 1;
                    numberOfLisAtIndex[i] = numberOfLisAtIndex[j];
                }
                else if (dp[j] + 1 == dp[i])
                {
                    numberOfLisAtIndex[i] += numberOfLisAtIndex[j];
                }
            }
        }
    }
    let maxlen = Math.max(dp);
    let ans = 0;
    for (let k = 0; k < dp.length; k++)
    if (dp[k] == maxlen)
        ans += numberOfLisAtIndex[k];

    return ans;

};
let nums = [1,3,5,4,7];
console.log(findNumberOfLIS(nums));