// Solution for https://leetcode.com/problems/path-sum/

var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    if(root.left === null && root.right === null) return root.val === targetSum;
    
    const left = hasPathSum(root.left, targetSum - root.val);
    const right = hasPathSum(root.right, targetSum - root.val);
    return left || right;
};