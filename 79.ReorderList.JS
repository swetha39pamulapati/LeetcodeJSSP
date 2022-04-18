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
     reorderList = function(head) {
        if (head == null || head.next == null)
            return;
        //head of 1st half
        let l1 = head;
        //head of 2nd half
        let slow = head;
        //tail of 2nd half
        let fast = head;
        //tail of 1st half
        let temp = null;
        while (fast != null && fast.next != null)
        {
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null; //makes the middle's next to null;


         let l2 = reverse(slow);
        merge(l1, l2);
    };
     merge(l1,l2){
        while(l1 != null )
        {
            let l1Next = l1.next;
            let l2Next = l2.next;
            l1.next = l2;
            if (l1Next == null)
                break;
            l2.next = l1Next;
            l1 = l1Next;
            l2 = l2Next;
        }
    }
     reverse(head){
        let prev = null;
        let currentNode = head;
        while(currentNode != null)
        {
            let nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
        }
        return prev;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
const p = new LinkedList(head);
console.log(p.reorderList(head));