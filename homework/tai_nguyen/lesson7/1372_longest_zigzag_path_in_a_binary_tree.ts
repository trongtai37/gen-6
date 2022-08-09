/**
 * @link https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
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

function longestZigZag(root: TreeNode | null): number {
  let res = 0;
  if (root === null) return res;

  function zigZagDfs(
    node: TreeNode,
    currentLength: number,
    isLeftNode: boolean = true
  ) {
    res = Math.max(res, currentLength + 1);

    const goLeftInitLength = isLeftNode ? 0 : currentLength + 1;
    const goRightInitLength = isLeftNode ? currentLength + 1 : 0;

    if (node.left) {
      zigZagDfs(node.left, goLeftInitLength);
    }

    if (node.right) {
      zigZagDfs(node.right, goRightInitLength, false);
    }
  }

  if (root.left) zigZagDfs(root.left, 0);
  if (root.right) zigZagDfs(root.right, 0, false);

  return res;
}
