LEFT = 0
RIGHT = 1
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        queue = [root]
        while queue:
            next = []
            for i in range(len(queue)):
                node = queue[i]
                other_node = queue[len(queue)-1-i]
                if node:
                    if other_node is None:
                        return False
                    if node.val !=other_node.val:
                        return False
                if node is None:
                    next.append(None)
                    next.append(None)
                else:
                    next.append(node.left)
                    next.append(node.right)
            if all([x for x in next if x is not None]):
                queue = next
            else:
                queue = []
        return True