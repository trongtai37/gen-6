// Solution for https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isSymmetricUtil = (left, right) => {
  if (left == null || right == null) return left == right;
  if (left.val != right.val) return false;

  return isSymmetricUtil(left.left, right.right) && isSymmetricUtil(left.right, right.left);
}

var isSymmetric = function (root) {
  return isSymmetricUtil(root.left, root.right);
};