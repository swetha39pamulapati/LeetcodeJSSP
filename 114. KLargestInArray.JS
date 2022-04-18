let findKthLargest = function(nums, k) {
    return QS(nums, 0, nums.length - 1, nums.length - k);
};
function QS(nums,start,end, index){
    let pivot = nums[end];
    let left = start;
    let right = end - 1;

    do
    {
        while (left <= end && nums[left] < pivot)
        {
            left++;
        }
        while (right > start && nums[right] >= pivot)
        {
            right--;
        }
        if (left < right)
        {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
        }
    }
    while (left < right);

    nums[end] = nums[left];
    nums[left] = pivot;

    if (left == index) return nums[left];
    else if (left < index) return QS(nums, left + 1, end, index);
    else return QS(nums, start, left - 1, index);
}
let nums = [3,2,1,5,6,4], k = 2;
console.log(findKthLargest(nums,k));
