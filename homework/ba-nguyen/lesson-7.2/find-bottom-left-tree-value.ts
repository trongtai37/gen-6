function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0;

  let queue: TreeNode[] = [];
  let neighborhoods: TreeNode[] = [];
  let bottomLeftNode: TreeNode | null = root;

  queue.push(root);

  while (!!queue.length) {
    const node = queue.shift();

    if (node?.left) {
      neighborhoods.push(node.left);
    }

    if (node?.right) {
      neighborhoods.push(node.right);
    }

    // check is that iterate all level then move to next level
    if (!queue.length && !!neighborhoods.length) {
      queue = neighborhoods;
      bottomLeftNode = neighborhoods[0];
      neighborhoods = [];
    }
  }

  return bottomLeftNode.val;
}
