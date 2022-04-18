class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}

let rightSideView = function(root) {
    let result = [];
    let queue = [];
    if(root == null)
        return result;

    queue.push(root);
    while(queue.length>0){
        let size = queue.length;
        for(let i = 0 ; i<size; i++){
            let currentVal = queue.shift();
            if(i == 0){
                result.push(currentVal.val);
            }
            if(currentVal.right)
                queue.push(currentVal.right);
            if(currentVal.left )
                queue.push(currentVal.left);

        }
    }
    return result;
};
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(3);
root.left = newNode(9);
root.right = newNode(20);
root.right.left =newNode(15);
root.right.right = newNode(7);
console.log(rightSideView(root));