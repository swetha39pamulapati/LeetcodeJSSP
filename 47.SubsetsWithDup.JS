let subsetsWitDup = function(nums) {
    let subset = [];
    let list = []
    if(nums.length ==0 || nums == null )
        return subset;
    generateSubset(0,list,nums.sort(),subset);
    return subset;
};
function generateSubset(start,list,nums,subset){
    subset.push(list.slice());
    for(let i = start; i< nums.length;i++){
        if(i>start && nums[i-1] == nums[i])
            continue;
        list.push(nums[i]);
        generateSubset(i+1,list,nums,subset);
        list.pop();
    }
}
let nums = [4,4,4,1,4];
console.log(subsetsWitDup(nums));