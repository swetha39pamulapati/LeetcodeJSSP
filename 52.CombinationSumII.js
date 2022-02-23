let combinationSum2 = function(candidates, target) {
    let result = [];
    let list = [];
    if (candidates.length == 0)
        return result;
    generateCombinationSum(0,candidates.sort(), target, list, result);
    return result;
};
function generateCombinationSum(start,candidates, target, list, result){
    if(target == 0)
        result.push(list.slice());
    else {
        for(let i =start; i<candidates.length; i++){
            if (i > start && candidates[i] == candidates[i - 1])
                continue;
            if(target-candidates[i]<0)
                break;
            list.push(candidates[i]);
            generateCombinationSum(i+1,candidates, target-candidates[i], list, result);
            list.pop();
        }
    }
}
let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(combinationSum2(candidates,target));