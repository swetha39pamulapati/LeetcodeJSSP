let sums = [];
var NumArray = function(nums) {
    let n = nums.length;
    sums = new Array(n + 1);
    sums[0] = 0;
    for(let i = 1; i <= n; i++){
        sums[i]  = sums[i-1] +nums[i-1];

    }
};
NumArray.prototype.sumRange = function(i, j) {
    return sums[j + 1] - sums[i];
};

let arr = [-2, 0, 3, -5, 2, -1 ];
let numArray = new NumArray(arr);
NumArray(arr);
console.log(numArray.sumRange(0,2));
console.log(numArray.sumRange(2,5));
console.log(numArray.sumRange(0,5));