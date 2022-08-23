# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


#Recursion Method
class Solution:
    def traverse(self,node):
        if node:
            self.traverse(node.left)
            self.ans.append(node.val)
            self.traverse(node.right)
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        self.ans = []
        self.traverse(root)
        return self.ans
        
#Iteractive Method
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        stack = []
        if root is not None:
            node = root
            cur = node
            while len(stack)>0 or cur is not None:
                while(cur):
                    stack.append(cur)
                    cur =cur.left
                cur = stack.pop()
                result.append(cur.val)
                cur = cur.right
        return result      
        