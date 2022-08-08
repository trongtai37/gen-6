class Solution {
public:
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        return dfs(root, 0, targetSum, {});
    }

    vector<vector<int>> dfs(TreeNode* root, int sum, int target, vector<int> path) {
        if (!root)
            return {};

        sum += root->val;
        path.push_back(root->val);

        vector<vector<int>> result;

        if (!root->left && !root->right) {
            if (sum == target)
                result.push_back(path);
        }

        vector<vector<int>> left = dfs(root->left, sum, target, path);
        vector<vector<int>> right = dfs(root->right, sum, target, path);

        result.insert(result.end(), left.begin(), left.end());
        result.insert(result.end(), right.begin(), right.end());

        return result;
    }
};
