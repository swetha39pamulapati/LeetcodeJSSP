let productExceptSelf = function(nums) {
    if(nums.length == 0 || nums == null)
        return null;
    let temp = 1;
    let result = [];
    for(let i = 0; i<nums.length; i++)
    {
        result[i] = temp;
        temp *=nums[i];
    }
    temp =1;
    for(let i = nums.length-1; i>= 0 ; i--){
        result[i] *= temp;
        temp *= nums[i];

    }
    return result;
};
let nums = [1,2,3,4];
console.log(productExceptSelf(nums));