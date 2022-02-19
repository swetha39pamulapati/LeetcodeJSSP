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

let isSubtree = function(root, subRoot) {
    if(root == null)
        return false;
    if(root.val == subRoot.val)
    {
        if(IsSame(root,subRoot))
            return true;
    }
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot);
};
function IsSame(s,t){
    if(s == null && t == null)
        return true;
    if(s!=null && t==null || t!=null && s==null || s.val != t.val)
        return false;
    return (IsSame(s.left, t.left) && IsSame(s.right, t.right));
}
let root = null;
root = newNode(3);
root.left = newNode(4);
root.right = newNode(5);
root.left.left = newNode(1);
root.left.right = newNode(2);

let root2 = null;
root2 = newNode(4);
root2.left = newNode(1);
root2.right = newNode(2);

console.log(isSubtree(root,root2));