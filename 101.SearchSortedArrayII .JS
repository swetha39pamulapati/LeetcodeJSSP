let search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    while(low <= high)
    {
        let mid = Math.floor(low + (high - low) / 2);

        if(nums[mid] == target)
            return true;

        if(nums[low] == nums[mid] && nums[mid] == nums[high])
        {
            low++;
            high--;
        }
        else if(nums[low] <= nums[mid])
        {
            if(nums[low] <= target && target <= nums[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        else
        {
            if(nums[high] >= target && target >= nums[mid])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }

    return false;
};
let nums = [2,5,6,0,0,1,2];
console.log(search(nums,0))