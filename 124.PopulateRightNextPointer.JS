class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
        this.next = null;
    }
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
let connect = function(root) {
    if(root == null)
        return null;
    let levelHead = null; // first node of the next level
    let prev = null; // last visited node in the next level
    let curr = root; // current node in the current level

    while(curr != null)
    {
        while(curr != null)
        {
            if(curr.left != null)
            {
                if(prev == null)
                {
                    levelHead = curr.left;
                    prev = curr.left;
                }
                else
                {
                    prev.next = curr.left;
                    prev = curr.left;
                }
            }

            if(curr.right != null)
            {
                if(prev == null)
                {
                    levelHead = curr.right;
                    prev = curr.right;
                }
                else
                {
                    prev.next = curr.right;
                    prev = curr.right;
                }
            }

            curr = curr.next;
        }

        // move to the next level
        curr = levelHead;
        prev = null;
        levelHead = null;
    }

    return root;
}
let root = null;
root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left =newNode(4);
root.left.right = newNode(5);
console.log(connect(root));