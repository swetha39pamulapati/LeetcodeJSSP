var MaxSubArray = function(nums){
    if(nums.length == 0)
        return;
    let ans  = nums[0];
    let interval = 0;
    for(let i = 0; i<nums.length; i++){
       interval = interval + nums[i];
       ans = Math.max(interval, ans);
       interval = Math.max(0, interval);

    }
    return ans;
}


let nums =[-2,1,-3,4,-1,2,1,-5,4];
let data = MaxSubArray(nums);
console.log(data);