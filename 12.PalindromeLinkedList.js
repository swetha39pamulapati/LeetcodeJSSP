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

    palindromeList(head){
        if(head == null || head.next == null)
            return true;
        let slow =  head;
        let fast = head;
        while(fast!= null && fast.next!= null)
        {
            fast = fast.next.next;
            slow = slow.next;
        }
        slow = this.reverse(slow);
        fast = head;
        while(slow != null){
            if(slow.val!= fast.val){
                return false;
            }
            fast = fast.next;
            slow = slow.next;
        }
        return true;
    };
    reverse(head){
        if (head == null)
            return head;
        let prev  = null;
        while(head != null){
            let nextNode = head.next;
            head.next = prev;
            prev = head;
            head = nextNode;
        }
        return prev;

    }

}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(1);


const p = new LinkedList(head);
let data = p.palindromeList(head);
console.log(data);