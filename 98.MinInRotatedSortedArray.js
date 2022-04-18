let findMin = function(nums) {
    if (nums.length == 0)
        return -1;
    if (nums.length == 1)
        return nums[0];
    let left = 0;
    let right = nums.length - 1;
    while (left < right)
    {
        let mid =Math.floor( left + (right - left) / 2);
        if (mid>0 && nums[mid] < nums[mid - 1])
            return nums[mid];
        else if(nums[left] <= nums[mid] && nums[mid]> nums[right])
            left = mid + 1;
        else
            right = mid - 1;
    }
    return nums[left];
};

let  nums = [3,4,5,1,2];
console.log(findMin(nums));