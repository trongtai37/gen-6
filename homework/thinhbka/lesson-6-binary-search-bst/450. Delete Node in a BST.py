# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        parent = {}
        def find(node,key):
            if node.val == key:
                return node
            else:
                if node.val < key:
                    if node.right:
                        parent[node.right] = node
                        return find(node.right)
                    return None
                else:
                    if node.left:
                        parent[node.left] = node
                        return find(node.left)
                    return None
        def dfs(node):
            if node.left:
                parent[node.left] = node
                dfs(node.left)
            if node.right:
                parent[node.right] = node
                dfs(node.right)