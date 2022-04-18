class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
     rotateRight = function(head, k) {
        if (head == null)
            return head;
        let length = 1;
        let tail = head;
        while (tail.next != null)
        {
            length++;
            tail = tail.next;
        }
        k = k % length;

        if (k == 0)
        {
            return head;
        }
        let current = head;
        for( let  i = 0; i< length-k-1; i++)
        {
            current = current.next;
        }
        let newhead = current.next;
        current.next = null;
        tail.next = head;
        return newhead;
    };
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const p = new LinkedList(head);
console.log(p.rotateRight(head,2));