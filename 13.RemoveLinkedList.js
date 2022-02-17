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
       while(head != null && head.val == val){
           head = head.next;
       }
       let currentNode = head;
       while(currentNode != null && currentNode.next != null){
           if(currentNode.next.val == val){
               currentNode.next = currentNode.next.next;
           }
           else
               currentNode = currentNode.next;
       }
       return head;
    }
}


let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

const p = new LinkedList(head);
let data = p.removeElement(head,2);
console.log(data);