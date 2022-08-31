function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !root.right) root = null;
    else if (root.right) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    } else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }

  return root;
}

function predecessor(root: TreeNode | null) {
  root = root.left;
  while (root.right) root = root.right;
  return root.val;
}

function successor(root: TreeNode | null) {
  root = root.right;
  while (root.left) root = root.left;
  return root.val;
}
