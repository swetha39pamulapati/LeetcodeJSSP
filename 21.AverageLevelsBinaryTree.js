class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function averageOfLevels(root){
    if (!root) {
        return [];
    }
    let res = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let numOfNodes = queue.length;
        let nodeSum = 0;
        for (let i = 0; i < numOfNodes; i++) {
            let node = queue.shift();
            nodeSum += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(nodeSum / numOfNodes).toFixed(5);
    }
    return res;
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}


let root = null;
root = newNode(3);
root.left = newNode(9);
root.right = newNode(20);
root.left.left = newNode(15);
root.left.right = newNode(7);

console.log(averageOfLevels(root));