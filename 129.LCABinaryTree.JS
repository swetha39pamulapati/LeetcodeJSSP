class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}

let lowestCommonAncestor = function(root, p, q) {
    if (root == null)
    {
        return root;
    }
    if (root.val == p.val || root.val == q.val)
    {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null)
    {
        return root;
    }
    if (left != null)
    {
        return left;
    }
    if (right != null)
    {
        return right;
    }
    return null;

};
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(3);
root.left = newNode(5);
root.right = newNode(1);
root.left.left =newNode(6);
root.left.right = newNode(2);
root.right.left =newNode(0);
root.right.right = newNode(8);
root.left.right.left = newNode(7);
root.left.right.right = newNode(4);
let p = 5, q = 1
console.log(lowestCommonAncestor(root,p,q));