#recursion approach
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:return head
        if head.next:
            self.reverseList(head.next)
            cur = head
            next = head.next
            head.next = None
            next.next = head
        else:
            self.head = head
        return self.head    


#iterative approach
#init 
#                              cur        
# O    <-    O   <-   O    ->    O    ->    O    ->    O    ->    O
#                     pre                 next
#next= cur.next
#
# 
#                              cur        
# O    <-    O   <-   O    <-    O         O    ->    O    ->    O
#                               pre       next
#
#cur.next = pre
#pre = cur
#
#                                         cur        
# O    <-    O   <-   O    <-    O         O    ->    O    ->    O
#                               pre       next
#
#cur = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pre = None
        next  =None
        cur = head
        while cur:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        return pre    

