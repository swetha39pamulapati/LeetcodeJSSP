class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function pathSum(root,targetSum){
    if(root == null)
        return false;
    if(root.left == null && root.right == null && root.val == targetSum)
        return true;
    return pathSum(root.left,targetSum-root.val) || pathSum(root.right,targetSum - root.val);
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}


let root = null;
root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);

console.log(pathSum(root,5));