function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null {
  const pVal = Math.min(p.val, q.val);
  const qVal = Math.max(p.val, q.val);

  if (root === null) return null;

  if (root.val >= pVal && root.val <= qVal) {
    return root;
  }

  if (root.val < pVal) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return lowestCommonAncestor(root.left, p, q);
}