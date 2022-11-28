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
    if (root == null)
        return null;
    let head = root;
    while(head!= null)
    {
        let dummy = new Node();
        let temp = dummy;
        while(head!= null)
        {
            if(head.left!= null)
            {
                temp.next = head.left;
                temp = temp.next;
            }
            if (head.right != null)
            {
                temp.next = head.right;
                temp = temp.next;
            }
            head = head.next;
        }
        //next level
        head = dummy.next;
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