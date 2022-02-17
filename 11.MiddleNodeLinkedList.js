//Correct logic but not executing;

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
    middleNode(head){
        if(head == null)
            return null;
        let slow = head;
        let fast = head;
        while(fast!= null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = new ListNode(2);
const p = new LinkedList(head);
let result = p.middleNode(head);
console.log(result.data);