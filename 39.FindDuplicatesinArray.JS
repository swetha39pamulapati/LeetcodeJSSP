let findDuplicates = function(nums) {
    let data = new Set();
    let result = [];
    for(let i =0 ; i<nums.length; i++){
        if(!data.has(nums[i])){
            data.add(nums[i]);
        }
        else{
            result.push(nums[i]);
        }
    }
    return result;
};

let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));