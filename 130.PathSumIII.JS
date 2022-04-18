class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
let count = 0;
let pathSum = function(root, targetSum) {
    let result = [];
    generateSum(root, targetSum, result);

    return count;
};
function generateSum(root, targetSum, result)
{
    if (root == null)
        return;
    result.push(root.val);
    generateSum(root.left, targetSum, result);
    generateSum(root.right, targetSum, result);
    let temp = 0;
    for(let i =result.length -1; i>=0; i--)
    {
        temp += result[i];
        if (temp == targetSum)
            count++;
    }
    result.pop();
}

function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(10);
root.left = newNode(5);
root.right = newNode(-3);
root.left.left =newNode(3);
root.left.right = newNode(2);
root.left.left.left =newNode(3);
root.left.left.right =newNode(-2);
root.right.right = newNode(11);
let targetSum = 8;
console.log(pathSum(root,targetSum));

