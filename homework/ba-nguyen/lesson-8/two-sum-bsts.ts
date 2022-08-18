function twoSumBSTs(
  root1: TreeNode | null,
  root2: TreeNode | null,
  target: number
): boolean {
  const queue: TreeNode[] = [];
  queue.push(root1);

  while (!!queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (binarySearch(root2, target - node.val)) return true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return false;
}

function binarySearch(node: TreeNode, numb: number) {
  if (!node) return false;

  if (node.val === numb) return true;
  if (node.val < numb) return binarySearch(node.right, numb);
  return binarySearch(node.left, numb);
}
