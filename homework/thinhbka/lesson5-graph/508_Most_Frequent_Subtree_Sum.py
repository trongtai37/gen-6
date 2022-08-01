#https://leetcode.com/problems/most-frequent-subtree-sum/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

#Time: O(n)
#Space: O(logN) (binary tree on average case)
class Solution:
    def dfs(self,node):
        if node.left is None and node.right is None:
            if node.val not in self.cnt_fre:
                self.cnt_fre[node.val] = 0
            self.cnt_fre[node.val]+=1
            return node.val
        sub_sum = node.val
        if node.left:
            sub_sum += self.dfs(node.left)
        if node.right:
            sub_sum +=self.dfs(node.right)
        if sub_sum not in self.cnt_fre:
            self.cnt_fre[sub_sum] = 0
        self.cnt_fre[sub_sum]+=1
        return sub_sum
    def findFrequentTreeSum(self, root: Optional[TreeNode]) -> List[int]:
        self.cnt_fre = {}
        self.dfs(root)
        max_fre =max(list(self.cnt_fre.values()))       
        return [key for key in self.cnt_fre if self.cnt_fre[key]==max_fre]
