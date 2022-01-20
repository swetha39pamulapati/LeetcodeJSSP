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
    reverseList(head){
        if (head == null)
            return head;
        let tempNode = head;
        let prevNode = head;
        let currentNode = head.next;
        prevNode.next = null;
        while(currentNode != null)
        {
            tempNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = tempNode;
        }
        return prevNode;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);


const p = new LinkedList(head);
let data = p.reverseList(head);
console.log(data);