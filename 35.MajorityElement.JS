let majorityElement = function(nums) {
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i]))
            map.set(nums[i],1);
        else
        map.set(nums[i],map.get(nums[i])+1);


        if(map.get(nums[i])> nums.length/2)
            return nums[i];

    }
    return -1;
};
let  nums = [3,2,3];
console.log(majorityElement(nums));