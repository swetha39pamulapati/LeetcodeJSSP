
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null,head1 = null) {
        this.head = head
        this.head = head1
    }

     addTwoNumbers = function (l1, l2) {
        let carry = 0;
        let dummy = new ListNode(0);
        let pre = dummy;

        while (l1 != null || l2 != null || carry == 1) {
            let sum = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + carry;
            carry = sum < 10 ? 0 : 1;
            pre.next = new ListNode(sum % 10);
            pre = pre.next;

            if (l1 != null) {
                l1 = l1.next;
            }

            if (l2 != null) {
                l2 = l2.next;
            }
        }

        return dummy.next;
    }
}
let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
let head1 =new ListNode(5);
head1.next = new ListNode(6);
head1.next.next = new ListNode(4);
const p = new LinkedList(head,head1);
console.log(p.addTwoNumbers(head,head1));

