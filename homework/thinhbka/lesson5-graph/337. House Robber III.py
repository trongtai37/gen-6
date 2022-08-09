# https://leetcode.com/problems/house-robber-iii/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def dfs(self,root):
        if not root:return 0
        if root in self.hash_map:
            return self.hash_map[root]
        if root.left is None and root.right is None:
            self.hash_map[root] = root.val
            return root.val
        ans = root.val
        if root.left:
            node = root.left
            ans += self.dfs(node.left) + self.dfs(node.right)
        if root.right:
            node = root.right
            ans+=self.dfs(node.left) + self.dfs(node.right)
        ans1 = self.dfs(root.left) + self.dfs(root.right)
        self.hash_map[root] = max(ans,ans1)
        return self.hash_map[root]
        
    def rob(self, root: Optional[TreeNode]) -> int:
        self.hash_map = {}
        return self.dfs(root)