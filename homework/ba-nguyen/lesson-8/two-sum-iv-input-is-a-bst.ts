function findTarget(root: TreeNode | null, k: number): boolean {
  const array: number[] = [];
  inorderTraversal(root, array);

  let lo = 0;
  let hi = array.length - 1;

  while (lo < hi) {
    const sum = array[lo] + array[hi];
    if (sum === k) return true;
    if (sum < k) {
      lo++;
    } else {
      hi--;
    }
  }

  return false;
}

function inorderTraversal(node: TreeNode | null, array: number[]) {
  if (!node) return;

  inorderTraversal(node.left, array);
  array.push(node.val);
  inorderTraversal(node.right, array);
}
