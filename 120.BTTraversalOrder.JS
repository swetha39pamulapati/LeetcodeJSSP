class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
let levelOrderBottom = function(root) {
    let result = [];
    if (root == null)
        return result;

    let queue = [];
    queue.push(root);

    while (queue.length>0)
    {
        let size = queue.length;
        let oneResult =[];
        for (let s = 0; s < size; s++)
        {
            let cur = queue.shift();
            oneResult.push(cur.val);

            if (cur.left != null)
            {
                queue.push(cur.left);
            }

            if (cur.right != null)
            {
                queue.push(cur.right);
            }
        }
        result.push( oneResult);
    }


    return result.reverse();
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
console.log(levelOrderBottom(root));