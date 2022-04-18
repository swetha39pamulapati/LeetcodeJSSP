class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
let zigzagLevelOrder = function(root) {
    let res = [];
    if (root == null)
        return res;

    let queue = [];
    queue.push(root);
    let rowNum = 0;

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
        if(rowNum % 2 == 1)
            oneResult.reverse();

        res.push(oneResult);

        rowNum++;
    }


    return res;
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
console.log(zigzagLevelOrder(root));