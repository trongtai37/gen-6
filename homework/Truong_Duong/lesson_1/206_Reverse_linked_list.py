# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    # Iterative approach
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, current, next = None, head, None

        while(current != None):
            next = current.next
            current.next = prev
            prev = current
            current = next

        return prev

    # Recursive approach
    def reverseListRecursive(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverseListUtil(head, next):
            if head == None: return next
            temp = head.next
            head.next = next
            return reverseListUtil(temp, head)

        return reverseListUtil(head, None)