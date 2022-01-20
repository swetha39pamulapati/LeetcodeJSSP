
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
    mergeTwoLists = function(list1, list2) {
        if (list1 == null)
            return list2;
        if (list2 == null)
            return list1;
        let newHead = new ListNode(0);
        var newList = newHead;
        while (list1!= null  && list2 != null)
        {
            if(list1.val >= list2.val)
            {
                newList.next = list2;
                list2 = list2.next;

            }
            else
            {
                newList.next = list1;
                list1 = list1.next;
            }
            newList = newList.next;
        }
        //Add Remaining elements
        if (list1 != null)
            newList.next = list1;
        if (list2 != null)
            newList.next = list2;
        return newHead.next;
    }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(4);

let head1 = new ListNode(1);
head1.next = new ListNode(3);
head1.next.next = new ListNode(5);

const p = new LinkedList(head);
let data = p.mergeTwoLists(head,head1);
console.log(data);