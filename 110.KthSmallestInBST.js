class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
let kthSmallest = function(root, k) {
    let array = []
    dfs(root)
    return array[k - 1]

    function dfs(root){
        if(!root){
            return
        }
        dfs(root.left)
        array.push(root.val)
        dfs(root.right)
    }
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(3);
root.left = newNode(1);
root.right = newNode(4);
root.left.right = newNode(2);
console.log(kthSmallest(kthSmallest,1));