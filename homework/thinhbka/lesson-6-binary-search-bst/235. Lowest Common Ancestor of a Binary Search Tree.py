# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        parent = {root:None}
        level = {root:0}
        def dfs(node,parent,level):
            if node.left:
                left = node.left
                parent[left] = node
                level[left] =level[node]+1
                dfs(left,parent,level)
            if node.right:
                right = node.right
                parent[right] = node
                level[right] = level[node]+1
                dfs(right,parent,level)
        dfs(root,parent,level)
        
        if level[p] < level[q]:
            p,q = q,p
        while level[p] != level[q]:
            p = parent[p]
        while p!=q:
            p = parent[p]
            q = parent[q]
        return p
        