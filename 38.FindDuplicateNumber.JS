let findDuplicate = function(nums) {
    let data = new Set();
    for(let i = 0; i<nums.length; i++){
        if(!data.has(nums[i])){
            data.add(nums[i]);
        }
        else
            return nums[i];
    }
    return -1;
};
let nums = [1,3,4,2,2];
console.log(findDuplicate(nums));