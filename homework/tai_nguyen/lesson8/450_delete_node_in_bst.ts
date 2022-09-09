function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    // root.val === key
    if (root.left === null && root.right === null) return null;
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    let leftMostNode: TreeNode | null = null;
    function deleteLeftMost(node: TreeNode): TreeNode | null {
      if (node.left) {
        node.left = deleteLeftMost(node.left);
        return node;
      }

      leftMostNode = node;
      return node.right;
    }

    root.right = deleteLeftMost(root.right);
    leftMostNode!.left = root.left;
    leftMostNode!.right = root.right;

    return leftMostNode;
  }
}
