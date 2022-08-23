# https://leetcode.com/problems/find-bottom-left-tree-value/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

#Time O(n)
#Space O(n)
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        ans = 0
        frontier = [root]
        while frontier:
            nxt= []
            ans = frontier[0].val
            for node in frontier:
                if node.left:nxt.append(node.left)
                if node.right:nxt.append(node.right)
            frontier = nxt
        return ans