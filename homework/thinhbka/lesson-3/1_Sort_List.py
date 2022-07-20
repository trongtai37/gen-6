# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def merge(l1,l2):
    head = ListNode()
    cur = head
    while l1 and l2:
        if l1.val < l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    if l1:
        cur.next = l1
    if l2:
        cur.next = l2
    return head.next
#                             h
# a ->  b       c  ->  d  -> None
#      midPre   m
#      

#                                 h
# a ->  b  ->  c      d  -> e -> None
#           midPre    m
#      
def findMid(head):
    midPre = None
    while head and head.next:
        if midPre is None:
            midPre = head
        else:
            midPre = midPre.next
        head = head.next.next
    mid = midPre.next
    midPre.next = None
    return mid
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        mid = findMid(head)
        left = self.sortList(head)
        right = self.sortList(mid)
        return merge(left,right)