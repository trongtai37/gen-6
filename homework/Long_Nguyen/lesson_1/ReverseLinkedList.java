/**
 * Created by Long Nguyen
 * Date: 15/07/2022 21:22
 */

// https://leetcode.com/problems/reverse-linked-list/
public class ReverseLinkedList {
    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    /**
     * Iterative solution
     */
    public ListNode reverseListIterative(ListNode head) {
        if (head == null)
            return head;

        ListNode p1 = null;
        ListNode p2 = head;

        while (p2 != null) {
            ListNode p3 = p2.next;
            p2.next = p1;
            p1 = p2;
            p2 = p3;
        }

        return p1;
    }

    /**
     * Recursive solution
     */
    public ListNode reverseListRecursive(ListNode head) {
        if (head == null || head.next == null)
            return head;

        ListNode res = reverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;

        return res;
    }
}
