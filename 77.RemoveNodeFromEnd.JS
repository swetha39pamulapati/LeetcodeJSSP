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
         let p = head;
         let size =0;
         while(p!= null){
             size++;
             p = p.next;
         }
         if(size == n){
             return head.next;
         }
         let i = 1;
         let index = size-n;
         let p1 = head;
         while(i<index){
             i++;
             p1 = p1.next;
         }
         p1.next = p1.next.next;
         return head;
    };
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const p = new LinkedList(head);

console.log(p.removeNthFromEnd(head,2));