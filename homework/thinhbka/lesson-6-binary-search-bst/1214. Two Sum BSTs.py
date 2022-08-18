# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def twoSumBSTs(self, root1: Optional[TreeNode], root2: Optional[TreeNode], target: int) -> bool:
        values1 = {}
        def dfs(node):
            values1[node.val] = True
            if node.left:
                dfs(node.left)
            if node.right:
                dfs(node.right)
        dfs(root1)
        stack = [root2]
        while stack:
            node = stack.pop()
            if target- node.val in values1:
                return True
            if node.left:stack.append(node.left)
            if node.right:stack.append(node.right)
        return False