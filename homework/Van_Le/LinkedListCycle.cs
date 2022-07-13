// Let's have two pointers: fast one and slow one
// The slow pointer will move one step at a time
// The fast pointer will move two steps at a time
// If there is no cycle, the fast one will eventually reach the end -> in this case, return false
// If there is cycle, the fast one will eventually meet the slow one
// Time complexity: O(n) with n is the length of the input linked list
// Space complexity: O(1)

public class LinkedListCycle
{
    public bool HasCycle(ListNode head)
    {
        if (head == null)
        {
            return false;
        }
        var slow = head;
        var fast = head;
        while (head != null)
        {
            if (slow == null || fast == null || fast.next == null)
            {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow)
            {
                break;
            }
        }
        return true;
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