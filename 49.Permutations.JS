let permute = function(nums) {
    let permutes = [];
    let list = [];
    generatePermutations(list,nums, permutes);
    return permutes;
};
function generatePermutations(list,nums, permutes){
    if(list.length != nums.length)
    {

        for(let i = 0; i<nums.length; i++)
        {
            if (list.includes(nums[i]))
                continue;
            list.push(nums[i]);
            generatePermutations(list, nums, permutes);
            list.pop();
        }
    }

    else
    {
        permutes.push(list.slice());
    }
}

let nums = [1,1,2];
console.log(permute(nums));
