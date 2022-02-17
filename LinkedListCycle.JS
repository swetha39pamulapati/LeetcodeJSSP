
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
    hasCycle(head){
        if (head == null || head.next == null)
            return false;
        let slow = head;
        let fast = head.next;

        while (slow != fast)
        {
            if (fast == null || fast.next == null)
                return false;
            slow = slow.next;
            fast = fast.next.next;

        }
        return true;
    }
}
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;
const p = new LinkedList(head);
console.log(p.hasCycle(head));

