# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

#Time O(n*2) - still AC
#Space O(n) for recursion stack
class Solution:
    def dfs(self, node, target):
        if not node:
            return
        if node.val == target:
            self.ans +=1
        new_target = target-node.val
        self.dfs(node.left, new_target)
        self.dfs(node.right, new_target)
 
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        self.ans = 0
        frontier = [root]
        while frontier:
            next = []
            for node in frontier:
                self.dfs(node,targetSum)
                if node.left:
                    next.append(node.left)
                if node.right:
                    next.append(node.right)
            frontier = next
        return self.ans


# Method 2: Using prefixSum
# Time O(N)
# Space O(N)
class Solution:
    def dfs(self,node,currSum,target):
        if not node:
            return
        nowSum = currSum+node.val
        if nowSum-target in self.psa:
            self.ans+=self.psa[nowSum-target]
            
        if nowSum not in self.psa:
            self.psa[nowSum] = 0
        self.psa[nowSum]+=1

        self.dfs(node.left,nowSum,target)
        self.dfs(node.right,nowSum,target)

        self.psa[nowSum]-=1
        if self.psa[nowSum] == 0:
            del self.psa[nowSum]

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        if root is None:return 0
        self.ans = 0
        self.psa = {0:1}
        self.dfs(root,0,targetSum)
        return self.ans