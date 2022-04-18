let search = function(nums, target) {
    if (nums == null || nums.length == 0)
        return -1;
    let left = 0;
    let right = nums.length - 1;
    //Find smallest index;
    while (left < right)
    {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > nums[right])
        {
            left = mid + 1;
        }
        else
        {
            right = mid;
        }
    }
    let start = left;
    left = 0;
    right = nums.length - 1;
    if(target>=nums[start] && target <= nums[right])
    {
        left = start;
    }
    else
    {
        right = start;
    }

    while (left <= right)
    {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
};
let nums = [4,5,6,7,0,1,2];
console.log(search(nums,0))