import heapq as h
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        tmp = []
        for i in range(len(lists)):
            node = lists[i]
            if node:
                tmp.append((node.val,i,node))
        h.heapify(tmp)
        root = ListNode()
        cur = root
        while tmp:
            _,index,node = h.heappop(tmp)
            cur.next = node
            cur = cur.next
            if node.next:
                node = node.next
                h.heappush(tmp,(node.val,index,node))
        return root.next