let rob = function(nums) {

    if(nums.length == 0)
        return 0;
    if(nums.length == 1)
        return nums[0];
    return Math.max(robbed(nums,0,nums.length-2),robbed(nums,1,nums.length-1));
};
function robbed(nums,start,end){
    if(start == end)
        return nums[start];
    let dp = new Array(nums.length);
    dp[start] = nums[start];
    dp[start+1] = Math.max(nums[start],nums[start+1]);
    for(let i = start+2; i<=end; i++)
        dp[i] = Math.max(dp[i-1], dp[i-2] +nums[i]);
    return dp[end];
}
let nums = [2,3,2];
console.log(rob(nums));