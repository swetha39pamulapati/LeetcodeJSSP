
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
       if (root == null)
           return 0;
       return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
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