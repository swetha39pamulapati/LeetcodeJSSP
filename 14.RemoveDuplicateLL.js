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

        let currentNode = head;
        while(currentNode != null && currentNode.next != null){
            if(currentNode.next.val == currentNode.val)
                currentNode.next = currentNode.next.next;
            else
                currentNode = currentNode.next;
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