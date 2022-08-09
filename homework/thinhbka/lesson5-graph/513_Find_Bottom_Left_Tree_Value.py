# https://leetcode.com/problems/find-bottom-left-tree-value/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

#Time O(n)
#Space O(n)
class Solution:
    def bfs(self,node):
        self.ans = [(0,node.val)]
        queue = [(0,node)]
        while queue:
            next = []
            for (level,node) in queue:
                if node.left is None and node.right is None:
                    self.ans.append((level,node.val))
                if node.left:
                    next.append((level+1,node.left))
                if node.right:
                    next.append((level+1,node.right))
            queue = next
        max_depth = self.ans[0][0]
        for e in self.ans:
            if max_depth < e[0]:
                max_depth = e[0]
        for e in self.ans:
            if max_depth == e[0]:
                return e[1]
        
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        return self.bfs(root)
        