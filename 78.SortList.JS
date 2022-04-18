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
     sortList = function(head) {
        if (head == null || head.next == null) return head;
        let temp = head;
        let slow = head;
        let fast = head;
        while(fast!= null && fast.next!= null)
        {
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null;

        let left = sortList(head);
        let right = sortList(slow);

        return mergedList(left, right);
    };
     mergedList(l1, l2){
        let sortedTemp = new ListNode(0);
        let currentNode = sortedTemp;
        while(l1 != null && l2!= null)
        {
            if (l1.val < l2.val)
            {
                currentNode.next = l1;
                l1 = l1.next;

            }
            else
            {
                currentNode.next = l2;
                l2 = l2.next;
            }
            currentNode = currentNode.next;
        }
        if(l1!= null)
        {
            currentNode.next = l1;
            l1 = l1.next;

        }
        if (l2 != null)
        {
            currentNode.next = l2;
            l2 = l2.next;

        }
        return sortedTemp.next;
    }
}

let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);
const p = new LinkedList(head);

console.log(p.removeNthFromEnd(head,2));