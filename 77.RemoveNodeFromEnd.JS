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
     removeNthFromEnd = function(head, n) {
        let dummyHead = new ListNode(0);
        dummyHead.next = head;
        let slow = dummyHead;
        let fast = dummyHead;
        for(let i = 0; i<=n; i++)
        {
            fast = fast.next;
        }
        while(fast!= null)
        {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;// removes the node
        return dummyHead.next;
    };
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const p = new LinkedList(head);

console.log(p.removeNthFromEnd(head,2));