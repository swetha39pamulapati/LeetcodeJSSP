
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
        let tempNode = new ListNode(0);
        let currentNode = tempNode;
        while(list1!= null && list2 != null){
            if(list1.val <list2.val){
                currentNode.next = list1;
                list1 = list1.next;
            }
            else
            {
                currentNode.next = list2;
                list2 = list2.next;
            }
            currentNode = currentNode.next;
        }
        if(list1 != null)
        {
            currentNode.next = list1;
            list1 = list1.next;
        }
        if(list2 != null)
        {
            currentNode.next = list2;
            list2 = list2.next;
        }
        return tempNode.next;
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