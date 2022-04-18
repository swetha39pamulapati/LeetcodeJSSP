let minSubArrayLen = function(target, nums) {
    let result = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let val_sum = 0;
    for(let i = 0; i<nums.length; i++)
    {
        val_sum += nums[i];
        while (val_sum >= target)
        {
            result = Math.min(result, i + 1 - left);
            val_sum -= nums[left];
            left++;
        }
    }
    return result != Number.MAX_SAFE_INTEGER ? result : 0;
};
let target = 7, nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target,nums));