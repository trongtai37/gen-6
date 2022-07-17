public class SortListSolution
{
    // 1/ confirm that the head is null or the reference of the head is null
    // SPLIT INTO TWO HALVES:
    // 2/ get middle of the linked list (because in linked list we can't get random access)
    // 3/ try to set a middle node's next pointer to be null and move the next middle node to the next node

    // RECURSIVE
    // 4/ try to call recursive to get the smallest size of left and right

    // MERGE SORT
    // 5/ merge two linked list together
    public ListNode SortList(ListNode head)
    {
        if (head == null || head.next == null)
            return head;
        ListNode mid = GetMid(head);
        ListNode temp = mid.next;
        mid.next = null;
        mid = temp;
        ListNode left = SortList(head);
        ListNode right = SortList(mid);
        return Merge(left, right);
    }

    // because linked list can't be get random access so that needs to be iterated from the start
    // to solve this typical getting middle problem, slow and fast pointers will be needed
    // the slow one will be shifted one step at a time
    // while the fast one will be shifted two steps at a time
    // the iteration will be finished when the fast pointer will meet the end of the linked list
    private ListNode GetMid(ListNode head)
    {
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null)
        {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }


    // mockHead will keep the head of the list
    // while tail will keep the tail of the list
    private ListNode Merge(ListNode list1, ListNode list2)
    {
        ListNode mockHead = new ListNode();
        ListNode tail = mockHead;
        while (list1 != null && list2 != null)
        {
            if (list1.val < list2.val)
            {
                tail.next = list1;
                list1 = list1.next;
            }
            else
            {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        if (list1 != null) tail.next = list1;
        if (list2 != null) tail.next = list2;
        return mockHead.next;
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