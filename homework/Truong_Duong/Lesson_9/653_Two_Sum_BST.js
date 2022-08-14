// Solution for https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
 * @param {number} k
 * @return {boolean}
 */


 var findTarget= function(root, k) {
  const dict = new Set();
  if(root.left === null && root.right === null) return false;
  
  const findTargetUtil = function(root, k) {
      if(root === null) return false;

      if(dict.has(k - root.val)) return true;
      dict.add(root.val);

      if(findTargetUtil(root.left, k)) return true;
      if(findTargetUtil(root.right, k)) return true;

      return false;
  };
  
  return findTargetUtil(root, k);
};