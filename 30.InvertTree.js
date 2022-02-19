class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let invertTree = function(root) {
    if(root == null)
        return null;
    let node = new Node(root.val);
    node.left = invertTree(root.right);
    node.right = invertTree(root.left);
    return node;

};

let root = null;
root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);


console.log(invertTree(root));