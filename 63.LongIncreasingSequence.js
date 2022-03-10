function BinarySearch(a, left, right, element){
    while (right - left > 1)
    {
        let middle = Math.floor((left + right) / 2);
        if (a[middle] >= element)
            right = middle;
        else
            left = middle;
    }
    return right;

}
function LengthOfLIS (nums){
    let n = nums.length;
    let len = 0;
    if (n > 0)
    {
        len = 1;
        let dp = new Array(n);
        dp[0] = nums[0];
        for (let i = 1; i < n; i++)
        {
            if (nums[i] < dp[0])
                dp[0] = nums[i];
            else if (nums[i] > dp[len - 1])
                dp[len++] = nums[i];
            else
                dp[BinarySearch(dp, -1, len - 1, nums[i])] = nums[i];
        }
    }
    return len;
}
let nums = [10, 9, 2, 5, 3, 7, 101, 18 ];
console.log( LengthOfLIS(nums));
