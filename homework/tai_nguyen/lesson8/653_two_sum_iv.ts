function findTarget(root: TreeNode | null, k: number): boolean {
  const orderedNodeVals: number[] = [];

  function traverse(node: TreeNode | null) {
    if (node === null) return;

    traverse(node.left);
    orderedNodeVals.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  let l = 0,
    r = orderedNodeVals.length - 1;
  while (l < r) {
    const sum = orderedNodeVals[l] + orderedNodeVals[r];
    if (sum === k) {
      return true;
    }
    if (sum < k) {
      l++;
    } else {
      r--;
    }
  }

  return false;
}
