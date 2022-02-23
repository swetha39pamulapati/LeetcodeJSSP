let combinationSum = function(candidates, target) {
    let result = [];
    let list = [];
    if (candidates.length == 0)
        return result;
    generateCombinationSum(0,candidates, target, list, result);
    return result;
};
function generateCombinationSum(start,candidates, target, list, result){
    if(target == 0)
        result.push(list.slice());
    else if(target> 0){
        for(let i =start; i<candidates.length; i++){
            list.push(candidates[i]);
            generateCombinationSum(i,candidates, target-candidates[i], list, result);
            list.pop();
        }
    }
}
let  candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates,target));