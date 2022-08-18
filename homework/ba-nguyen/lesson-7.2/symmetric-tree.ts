function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return isSymmetricRecursive(root.left, root.right);
}

function isSymmetricRecursive(l: TreeNode | null, r: TreeNode | null): boolean {
  if (!l && !r) return true;
  if ((l?.left && !r?.right) || (!l?.right && r?.left)) return false;

  return (
    l?.val === r?.val &&
    isSymmetricRecursive(l.left, r.right) &&
    isSymmetricRecursive(l.right, r.left)
  );
}
