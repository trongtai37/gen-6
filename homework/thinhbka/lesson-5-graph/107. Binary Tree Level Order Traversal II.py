# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        result = []
        frontier = [root]
        while frontier:
            tmp = []
            next = []
            for node in frontier:
                if node:
                    tmp.append(node.val)
                    next.append(node.left)
                    next.append(node.right)
            frontier = next
            if tmp:result.append(tmp)
        result.reverse()
        return result