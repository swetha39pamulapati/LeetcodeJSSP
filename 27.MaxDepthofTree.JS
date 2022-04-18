
class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
   function maxDepth(root) {
       if(root == null)
           return 0;
       if(root.left == null && root.right == null)
           return 1;
       let left = root.left != null ? maxDepth(root.left) : Number.MIN_SAFE_INTEGER;
       let right = root.right != null ? maxDepth(root.right) : Number.MIN_SAFE_INTEGER;
       return Math.max(left, right) +1;
};

function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.right = newNode(3);


console.log(maxDepth(root));