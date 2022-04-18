class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}

let connect = function(root) {
    if (root == null)
        return null;

    let leftMost = root;

    while (leftMost.left != null)
    {
        let curr = leftMost;
        while (curr != null)
        {
            curr.left.next = curr.right;

            if (curr.next != null)
            {
                curr.right.next = curr.next.left;
            }

            curr = curr.next;
        }

        leftMost = leftMost.left;
    }

    return root;
};
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let root = null;
root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left =newNode(4);
root.left.right = newNode(5);
console.log(connect(root));