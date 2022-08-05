/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int pathSum(TreeNode* root, int targetSum) {
        stack<TreeNode*> st;
        int result = 0;

        while(root || st.size()) {
            while (root) {
                st.push(root);
                result += dfs(root, targetSum);
                root = root->left;
            }

            root = st.top();
            st.pop();

            root = root->right;
        }

        return result;
    }

    long dfs(TreeNode* root, long target) {
        if (!root)
            return 0;

        return (root->val == target) + dfs(root->left, target - root->val) +
            dfs(root->right, target - root->val);
    }
};
