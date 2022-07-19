// First, change the next pointer of the current node to its previous one.
// In linked list, we can't get the previous node base on the current one.
// So secondly, store the previous node before moving to the next loop.
// Also, we need to store the next node before so that we can jump to the exact next one.
// Return the new head reference lastly.
// Runtime complexity: O(n) with n is the list length
// Space complexity: O(1)

public class ReverseLinkedList
{
    public ListNode ReverseList(ListNode head)
    {
        ListNode prev = null;
        ListNode current = head;

        while (current != null)
        {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}