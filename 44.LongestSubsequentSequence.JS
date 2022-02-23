let longestConsecutive = function(nums) {
    let set = new Set();
    let longestSequence =0;
    for(let  i = 0; i<nums.length; i++)
        set.add(nums[i]);
    for(let i = 0; i<nums.length; i++){
        let currentNum = nums[i];
        let currentLength = 1;
        if(!set.has(currentNum-1)){
            while(set.has(currentNum +1)){
                currentNum +=1;
                currentLength +=1;
            }
            longestSequence = Math.max(longestSequence,currentLength) ;
        }
    }
    return longestSequence;
};
let nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));