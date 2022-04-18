let kSmallestPairs = function(nums1, nums2, k) {
    let result = [];
    let index = new Array(nums1.length).fill(0);
    let count = 0;
    while (count < k && count < nums1.length * nums2.length)
    {
        let  min = Infinity;
        let minIndex = 0;
        for (let j = 0; j < index.length; j++)
        {
            if (index[j] >= nums2.length) continue;
            if (nums1[j] + nums2[index[j]] <= min)
            {
                min = nums1[j] + nums2[index[j]];
                minIndex = j;
            }
        }
        result.push(Array.of(nums1[minIndex], nums2[index[minIndex]] ));
        index[minIndex]++;
        count++;
    }
    return result;
};
//taking more time to execute in leetcode
let nums1 = [1,7,11], nums2 = [2,4,6], k = 3;
console.log(kSmallestPairs(nums1,nums2,k))
