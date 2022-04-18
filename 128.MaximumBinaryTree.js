function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
         }


let constructMaximumBinaryTree = function(nums) {
    return constructMax(nums, 0, nums.length - 1);
};
function constructMax(nums, start, end){
    if (start > end)
        return null;
    let maxStartIndex = start;
    for(let i =start+1; i<=end; i++)
    {
        if(nums[i]>nums[maxStartIndex])
        {
            maxStartIndex = i;
        }
    }
    let node = new TreeNode(nums[maxStartIndex]);
    node.left =  constructMax(nums, start, maxStartIndex - 1);
    node.right =  constructMax(nums, maxStartIndex+1, end);
    return node;
}

let nums = [3,2,1,6,0,5];
console.log(constructMaximumBinaryTree(nums));