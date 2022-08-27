# https://leetcode.com/problems/path-sum-ii/
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
#Time O(n)
#Space O (n)
class Solution:
    def dfs(self,node,curr_arr,target):
        if node:
            if node.left is None and node.right is None:
                if node.val == target:
                    curr_arr.append(node.val)
                    self.ans.append(curr_arr.copy())
                    curr_arr.pop()
            else:
                curr_arr.append(node.val)
                new_target = target-node.val
                self.dfs(node.left,curr_arr,new_target)
                self.dfs(node.right,curr_arr,new_target)
                curr_arr.pop()
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        self.ans = []
        self.dfs(root,[],targetSum)
        return self.ans