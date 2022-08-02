/**
 * @link https://leetcode.com/problems/path-sum-ii/
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isLeaf(node: TreeNode) {
  return node.left === null && node.right === null;
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) return [];

  if (isLeaf(root)) {
    if (root.val === targetSum) {
      return [[root.val]];
    }

    return [];
  }

  const leftPaths = pathSum(root.left, targetSum - root.val);
  const rightPaths = pathSum(root.right, targetSum - root.val);

  return leftPaths.concat(rightPaths).map((path) => [root.val].concat(path));
}
