let maxProduct = function(nums) {
    let min = nums[0];
    let max = nums[0];
    let ans = nums[0];
    for(let i = 1; i<nums.length; i++){
        if(nums[i]<0){
            let temp = max;
            max = min;
            min = temp;

        }
        max = Math.max(nums[i],max*nums[i]);
        min = Math.min(nums[i],min*nums[i]);
        ans = Math.max(ans,max);
    }
    return ans;
};
let nums = [2,3,-2,4];

console.log(maxProduct(nums));