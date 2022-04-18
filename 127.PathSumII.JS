class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
let pathSum = function(root, targetSum) {
let result = [];
    findPath(root, targetSum, [], result);
    return result;

}
let findPath = function( root, targetSum, current, paths)
{
    if (root == null)
        return;
    current.push(root.val);
    if(root.val == targetSum && root.left==null && root.right== null)
    {
        paths.push(current.slice());
    }
    findPath(root.left, targetSum-root.val, current, paths);
    findPath(root.right, targetSum-root.val,current, paths);
    current.pop();
    return paths;
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(5);
root.left = newNode(4);
root.right = newNode(8);
root.left.left = newNode(11);
root.left.left.left = newNode(7);
root.left.left.right = newNode(2);
root.right.left = newNode(13);
root.right.right = newNode(4);
root.right.right.left = newNode(5);
root.right.right.right = newNode(1);

console.log(pathSum(root,22));