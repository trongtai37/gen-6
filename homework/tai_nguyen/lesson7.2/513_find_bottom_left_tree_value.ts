/**
 * @link https://leetcode.com/problems/find-bottom-left-tree-value/
 */
function findBottomLeftValue(root: TreeNode | null): number {
  if (root === null) return -1;

  let res = root;
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelLength = queue.length;
    for (let i = 1; i <= levelLength; i++) {
      const node = queue.shift()!;
      if (i === 1) {
        res = node;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res.val;
}
