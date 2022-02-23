let permuteUnique = function(nums) {
    let n = nums.length;

    let result = [];
    if (n == 0)
        return result;
    let list = [];
    let visited = new Array(n);
    visited.fill(false);

    generatePermutations(list, nums.sort(),visited, result);

    return result;
};
function generatePermutations(list, nums,isVisited, permutes){

    if (list.length != nums.length)
    {
        for (let i = 0; i < nums.length; i++)
        {
            if (isVisited[i])
                continue;
            if (i > 0 && nums[i - 1] == nums[i] && isVisited[i - 1])
                continue;
            isVisited[i] = true;
            list.push(nums[i]);
            generatePermutations(list, nums, isVisited, permutes);
            isVisited[i] = false;
            list.pop();

        }
    }
    else
    {
        permutes.push(list.slice());
    }
}
let nums = [1,1,2];
console.log(permuteUnique(nums));