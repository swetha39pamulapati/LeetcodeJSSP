var NumArray = function(nums) {
    this.sums = []

    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        this.sums.push(sum)

    }
    console.log(this.sums[0]);
};
NumArray.prototype.sumRange = function(left, right) {
   /* let a = this.sums[j];
    let b = 0;
    if (i != 0){
        b = this.sums[i - 1];
    }
    return a - b; */

    if(left === 0)
        return this.sums[right]

    return this.sums[right] - this.sums[left - 1]
};

let arr = [-2, 0, 3, -5, 2, -1 ];
NumArray(arr);
NumArray.sumRange(0,2);