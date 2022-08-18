function search(root: TreeNode | null, value: number): boolean {
  if (root === null) return false;

  if (root.val === value) return true;
  if (root.val > value) return search(root.left, value);
  return search(root.right, value);
}

function twoSumBSTs(
  root1: TreeNode | null,
  root2: TreeNode | null,
  target: number
): boolean {
  if (root1 === null || root2 === null) {
    return false;
  }

  function visitFirstAndFindSecond(node: TreeNode | null): boolean {
    if (node === null) return false;

    const isFound = search(root2, target - node.val);
    if (isFound) return true;

    return (
      visitFirstAndFindSecond(node.left) || visitFirstAndFindSecond(node.right)
    );
  }

  return visitFirstAndFindSecond(root1);
}
