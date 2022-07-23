/*
this problem can be solved with 2 solutions
1/ array: using two pointers, the first one will point to the front of the queue and the last one will point to the back.
-> this solution is too complicated since there is many edge cases for the pointers
2/ linked list: since this problem needs to interacted with the front and the back of the queue, the solution is to 
make use of double linked list and two dummy nodes.
Using dummy nodes will avoid a lot of edge cases so it will be easy to implement
-> choose linked list to solve this problem
Time complexity: O(1) for all functions
*/

public class MyCircularQueue
{
    private ListNode dummyLeftNode = new ListNode();
    private ListNode dummyRightNode = new ListNode();
    private int size = 0;
    private readonly int capacity = 0;

    public MyCircularQueue(int k)
    {
        dummyLeftNode.next = dummyRightNode;
        dummyRightNode.prev = dummyLeftNode;
        capacity = k;
    }

    public bool EnQueue(int value)
    {
        if (IsFull()) return false;

        var curNode = new ListNode(value, dummyRightNode, dummyRightNode.prev);
        dummyRightNode.prev.next = curNode;
        dummyRightNode.prev = curNode;

        size++;
        return true;
    }

    public bool DeQueue()
    {
        if (IsEmpty()) return false;
        dummyLeftNode.next = dummyLeftNode.next.next;
        dummyLeftNode.next.prev = dummyLeftNode;
        size--;
        return true;
    }

    public int Front()
    {
        if (IsEmpty()) return -1;
        return dummyLeftNode.next.val;
    }

    public int Rear()
    {
        if (IsEmpty()) return -1;
        return dummyRightNode.prev.val;
    }

    public bool IsEmpty()
    {
        return size == 0;
    }

    public bool IsFull()
    {
        return size == capacity;
    }
}

public class ListNode
{
    internal int val;
    internal ListNode next;
    internal ListNode prev;
    public ListNode(int val = 0, ListNode next = null, ListNode prev = null)
    {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
