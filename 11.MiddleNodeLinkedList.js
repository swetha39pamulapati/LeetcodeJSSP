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
        let start = head;
        let end = head;
        while(end != null && end.next != null){
            end = end.next.next;
            start = start.next;
        }
        return start;
    }
}
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = new ListNode(2);
const p = new LinkedList(head);
let result = p.middleNode(head);
console.log(result.data);