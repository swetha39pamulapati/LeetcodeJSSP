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
     swapPairs = function(head) {

        let temp = new ListNode(0);
        temp.next = head;
        let current  = temp;
        while(current.next != null && current.next.next!= null){
            let firstNode = current.next;
            let secondNode  = current.next.next;
            firstNode.next = secondNode.next;
            current.next = secondNode;
            current.next.next = firstNode;
            current = current.next.next;
        }
        return temp.next;

    };
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const p = new LinkedList(head);
console.log(p.swapPairs(head));