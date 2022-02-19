
class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function diameterOfBinaryTree(root){
    let max = 0;
    getHeight(root);
    return max;
    function getHeight(root) {
        if (root == null)
            return 0;
        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);
        let diameter = leftHeight + rightHeight;
        max = Math.max(max,diameter);
        return Math.max(leftHeight, rightHeight) + 1;
    }
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


console.log(diameterOfBinaryTree(root));