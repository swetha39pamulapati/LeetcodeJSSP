
class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function mergeTrees(root1,root2){
    if(root1 == null && root2 == null)
        return null;
    if (root1 == null)
        return root2;
    if(root2 == null)
        return root1;
    let data = root1.val +root2.val;
    let root= newNode(data);
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);
    return root;
}

function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(1);
root.left = newNode(3);
root.right = newNode(2);
root.left.left = newNode(5);

let root1 = null;
root1 = newNode(2);
root1.left = newNode(1);
root1.right = newNode(3);
root1.left.right = newNode(4);
root1.right.right = newNode(7);

console.log(mergeTrees(root,root1));