# https://leetcode.com/problems/diameter-of-binary-tree/


class Solution:
    def dfs(self,node):
        if not node:
            return 0
        sub_dia = 0
        left_ra = right_ra =0
        if node.left:
            left_ra=self.dfs(node.left)+1
        if node.right:
            right_ra = self.dfs(node.right)+1
        self.ans = max(self.ans,left_ra+right_ra)
        return max(left_ra, right_ra)
        
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.ans = 0
        self.dfs(root)
        return self.ans