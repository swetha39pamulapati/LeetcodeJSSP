let subsets = function(nums) {
    let subset = [];
    let list = []
    if(nums.length ==0 || nums == null )
        return subset;
    generateSubset(0,list,nums,subset);
    return subset;
};
function generateSubset(start,list,nums,subset){
    subset.push(list.slice());
    for(let i = start; i< nums.length;i++){
        list.push(nums[i]);
        generateSubset(i+1,list,nums,subset);
        list.pop();
    }
}
let nums = [1,2,3];
console.log(subsets(nums));