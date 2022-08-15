// Solution for https://leetcode.com/problems/find-bottom-left-tree-value/

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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  const queue = [];
  queue.push(root);

  let ans = root;
  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      if (i == 0) ans = queue[0];
      const u = queue.shift();

      if (u.left) queue.push(u.left);
      if (u.right) queue.push(u.right);
    }
  }

  return ans.val;
};
