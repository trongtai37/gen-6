# https://leetcode.com/problems/sum-of-left-leaves/


class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        ans = 0
        frontier = [(root,None)]
        while frontier:
            next = []
            for node,is_left in frontier:
                flag = False
                if node.left:
                    flag=True
                    next.append((node.left,True))
                if node.right:
                    flag = True
                    next.append((node.right,False))
                if flag is False and is_left:
                    ans+=node.val
            frontier = next
        return ans