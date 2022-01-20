class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function sameTree(p,q){
    if(p === null && q === null)
        return true;

    if(p === null || q === null)
        return false;
    if(p.val === q.val){
        return sameTree(p.left,q.left) && sameTree(p.right,q.right);
    }
    return false;

}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);


let root1 = null;
root = newNode(1);
root.left = newNode(3);
root.right = newNode(3);


console.log(sameTree(root,root1));