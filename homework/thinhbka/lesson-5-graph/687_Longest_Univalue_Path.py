#https://leetcode.com/problems/longest-univalue-path/submissions/
#Time : O(n)
#Space : O(N) in worst case but average case O(logN)
class Solution:
    def dfs(self,node):
        if not node:
            return 0
        ans = 0
        to_return = 0
        left = self.dfs(node.left)
        right = self.dfs(node.right)
        if node.left and node.left.val == node.val:
            ans+=left+1
            to_return = max(to_return,left+1)
        if node.right and node.right.val == node.val:
            ans+=right+1
            to_return =max(to_return,right+1)
        self.ans = max(self.ans,ans)
        return to_return
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.ans =0
        self.dfs(root)
        return self.ans