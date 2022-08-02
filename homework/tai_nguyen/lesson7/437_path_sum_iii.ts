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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  if (root === null) return count;

  function dfs(node: TreeNode | null): number[] {
    if (node === null) return [];

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (node.val === targetSum) {
      count++;
    }

    return [...left, ...right]
      .map((item) => {
        const sum = item + node.val;
        if (sum === targetSum) count++;

        return sum;
      })
      .concat(node.val);
  }

  dfs(root);

  return count;
}
