class ListNode {
    constructor(data) {
        this.val = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    removeduplicates(head){

        if (head == null || head.next == null)
            return head;
        let p1 = head;
        let p2 = head.next;
        while(p2 != null){
if(p1.val == p2.val){
    p1.next = p2.next;
    p2.next = null;
    p2 = p1.next;
}
else{
    p1 = p2;
    p2 = (p2 != null)? p2.next : null;
}
        }
        return head;
    }
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);

const p = new LinkedList(head);
let data = p.removeduplicates(head);
console.log(data);