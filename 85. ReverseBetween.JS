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


    let
    reverseBetween = function (head, left, right) {
        if (head == null)
            return null;
        let prev = null;
        let currentNode = head;
        while (left > 1) {
            prev = currentNode;
            currentNode = currentNode.next;
            left--;
            right--;
        }
        let connection = prev;
        let tail = currentNode;
        while (right > 0) {
            let nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
            right--;
        }
        if (connection != null) {
            connection.next = prev;
        } else
            head = prev;
        tail.next = currentNode;
        return head;

    }
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const p = new LinkedList(head);
console.log(p.reverseBetween(head,2,4));