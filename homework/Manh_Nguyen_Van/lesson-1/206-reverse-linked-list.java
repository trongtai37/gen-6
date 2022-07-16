/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode preListNode= null;
        ListNode temp= null;
        return reverseByIterator(head, preListNode, temp);
    }
    
    public ListNode reverseByIterator(ListNode head, ListNode preListNode, ListNode temp) {
		while (head != null) {
			temp = head.next;
			head.next = preListNode;
			preListNode = head;
			if (temp == null) {
				break;
			}
			head = temp;
		}
		return head;
	}

	public ListNode reverseByRecursive(ListNode head, ListNode preListNode, ListNode temp) {
		if (head == null) {
			return head;
		}
		temp = head.next;
		head.next = preListNode;
		preListNode = head;
		if (temp == null) {
			return head;
		}
		head = temp;
		return reverseByRecursive(head, preListNode, temp);
	}
}