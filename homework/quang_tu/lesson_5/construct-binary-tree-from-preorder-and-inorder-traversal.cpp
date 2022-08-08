class Solution {
    unordered_map<int,int> hashmap;
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        int leng = preorder.size();

        for (int i = 0; i < leng; ++i)
            hashmap[inorder[i]] = i;

        return dfs(0, leng, 0, preorder);
    }

    TreeNode* dfs(int begin, int end, int curIndex, vector<int>& preorder) {
        if (begin >= end)
            return nullptr;

        int number = preorder[curIndex],
            index = hashmap[number];

        if (index < begin || index > end)
            return dfs(begin, end, curIndex + 1, preorder);

        TreeNode* root = new TreeNode(number);

        root->left = dfs(begin, index, curIndex + 1, preorder);
        root->right = dfs(index + 1, end, curIndex + 1, preorder);

        return root;
    }
};
