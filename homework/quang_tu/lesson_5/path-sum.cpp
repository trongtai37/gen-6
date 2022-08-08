class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        return dfs(root, 0, targetSum);
    }

    bool dfs(TreeNode* root, int sum, int target) {
        if (!root)
            return false;

        bool result = false;

        sum += root->val;

        if (!root->left && !root->right)
            result = sum == target;

        return result || dfs(root->left, sum, target) ||
            dfs(root->right, sum, target);
    }
};
