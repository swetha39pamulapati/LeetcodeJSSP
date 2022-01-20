
class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function lowestCommonAncestor(root,p,q) {
    if (root == null)
        return null;
    if(p.val< root.val && q.val< root.val)
    {
        return lowestCommonAncestor(root.left, p, q);


    }
    else if (p.val > root.val && q.val > root.val)
        return lowestCommonAncestor(root.right, p, q);
    return root;
};

function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(2);
root.left = newNode(1);



console.log(lowestCommonAncestor(root,2,1));