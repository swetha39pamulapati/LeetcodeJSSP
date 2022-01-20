class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}

let minDepth = function(root) {
if(!root)
    return 0;
if(!root.left)
     return minDepth(root.right) + 1;
if(!root.right)
    return minDepth(root.left) + 1;

return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(3);
root.left = newNode(9);
root.right = newNode(20);
root.left.left = newNode(15);
root.left.right = newNode(7);

console.log(minDepth(root));