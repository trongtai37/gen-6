LEFT = 0
RIGHT = 1
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        frontier = [root]
        # frontier.append(root)
        while frontier:
            next = []
            for i in range(len(frontier)):
                node = frontier[i]
                other_node = frontier[len(frontier)-1-i]
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
                frontier = next
            else:
                frontier = []
        return True