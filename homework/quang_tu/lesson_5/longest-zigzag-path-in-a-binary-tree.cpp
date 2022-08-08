class Solution {
    int maxLength = 0;
public:
    int longestZigZag(TreeNode* root) {
        findZigZag(root->left, false, 1);
        findZigZag(root->right, true, 1);
        return maxLength;
    }

    void findZigZag(TreeNode* root, bool side, int sum) {
        if (!root)
            return;

        maxLength = max(maxLength, sum);
        if (side) {
            if (root->left)
                findZigZag(root->left, false, sum+1);

            findZigZag(root->right, true, 1);
        } else {
            if (root->right)
                findZigZag(root->right, true, sum+1);

            findZigZag(root->left, false, 1);
        }
    }
};
