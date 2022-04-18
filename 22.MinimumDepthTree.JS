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

    if(root == null)
        return 0;
    if(root.left == null && root.right == null)
        return 1;
    let left = root.left != null ? minDepth(root.left) : Number.MAX_SAFE_INTEGER;
    let right = root.right != null ? minDepth(root.right) : Number.MAX_SAFE_INTEGER;
    return Math.min(left, right) +1;
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