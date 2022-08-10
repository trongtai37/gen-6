// Solution for https://leetcode.com/problems/path-sum-ii/

var dfs = function(root, targetSum, res, currentPath) {
    if(root === null) return;
    if(root.left === null && root.right === null && root.val === targetSum) {
        const temp = [...currentPath, root.val];
        res.push(temp);
    }
    
    currentPath.push(root.val);
    dfs(root.left, targetSum - root.val, res, currentPath);
    dfs(root.right, targetSum - root.val, res, currentPath);
    currentPath.pop();
}

var pathSum = function(root, targetSum) {
    const res = [];
    if(root === null) return res;
    dfs(root, targetSum, res, []);
    return res;
};