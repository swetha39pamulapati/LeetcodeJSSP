let findNumberOfLIS = function(nums) {
    if (null == nums || nums.length == 0) return 0;
    let len = new Array(nums.length).fill(1);   //Length of the Longest Increasing Subsequence which ends with nums[i].
    let count = new Array(nums.length).fill(1);   //Number of the Longest Increasing Subsequence which ends with nums[i].
    for (let i = 1; i < nums.length; i++)
    {
        for (let j = 0; j < i; j++)
        {
            if (nums[j] < nums[i])
            {
                if (len[j] + 1 > len[i])
                {
                    len[i] = len[j] + 1;
                    count[i] = count[j];
                }
                else if (len[j] + 1 == len[i])
                {
                    count[i] += count[j];
                }
            }
        }
    }

    let maxlen =Math.max(...len);
    let ans = 0;
    for (let i = 0; i < len.length; i++)
        if (len[i] == maxlen)
            ans += count[i];

    return ans;
};
let nums = [1,3,5,4,7];
console.log(findNumberOfLIS(nums));