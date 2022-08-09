/**
 * @link https://leetcode.com/problems/house-robber-iii/
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isLeaf(node: TreeNode) {
  return node.left === null && node.right === null;
}

function rob(root: TreeNode | null): number {
  const cache = new Map<TreeNode, number>();

  function robWithCache(node: TreeNode | null | undefined): number {
    if (node === null || node === undefined) return 0;

    if (cache.has(node)) {
      return cache.get(node)!;
    }

    if (isLeaf(node)) {
      cache.set(node, node.val);
      return node.val;
    }

    const amount = Math.max(
      /* choose root, skip children and leverage the max to the grandchildren */
      node.val +
        robWithCache(node.left?.left) +
        robWithCache(node.left?.right) +
        robWithCache(node.right?.left) +
        robWithCache(node.right?.right),

      /* do not choose root, so we leverage to it's children  */
      robWithCache(node.left) + robWithCache(node.right)
    );

    cache.set(node, amount);
    return amount;
  }

  return robWithCache(root);
}
