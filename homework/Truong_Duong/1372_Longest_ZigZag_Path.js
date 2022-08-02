// Solution for https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/

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
var longestZigZag = function (root) {
    let ans = 0;

    function dfs(root, isLeft, step) {
        if (root === null) return;
        ans = Math.max(ans, step);

        if(isLeft) {
            dfs(root.left, true, 1);
            dfs(root.right, false, step + 1);
        } else {
            dfs(root.left, true, step + 1);
            dfs(root.right, false, 1);
        }
    }


    dfs(root, true, 0);
    dfs(root, false, 0);

    return ans;
};
