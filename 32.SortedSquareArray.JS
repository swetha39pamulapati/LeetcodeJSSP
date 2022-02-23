let sortedSquares = function(nums) {
    let result = [];
    let l = 0;
    let r = nums.length-1;
    for(let i = 0; i< nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    for(let i = nums.length-1; i>= 0; i--){
        if(nums[l]> nums[r]){
            result[i] = nums[l];
            l++;
        }
        else{
            result[i] = nums[r];
            r--;
        }
    }
    return result;
};
let nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums));
