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
    removeElement(head, val){
        let p = head;
        while (p != null && p.val == val)
            p = p.next;
        let result = p;

        while (p != null)
        {
            while (p.next != null && p.next.val == val)
                p.next = p.next.next;
            p = p.next;
        }
        return result;
    }
}


let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

const p = new LinkedList(head);
let data = p.removeElement(head,2);
console.log(data);