# https://leetcode.com/problems/path-sum/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self,node,target):
        if node is None:return False
        if node.left is None and node.right is None: # node is a leaf
            return node.val == target
        return self.dfs(node.left,target-node.val) or self.dfs(node.right,target-node.val) 
    
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        return self.dfs(root,targetSum)