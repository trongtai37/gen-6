
// https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/
public class LongestZigzagPathInABinaryTree {
    int ans = 0;
    public int longestZigZag(TreeNode root) {
        dfs(root, true, 0);
        dfs(root, false, 0);

        return ans;
    }

    private void dfs(TreeNode root, boolean isLeft, int currentAns) {
        if (root == null)
            return;

        ans = Math.max(currentAns, ans);
        if (isLeft) {
            dfs(root.left, false, currentAns + 1);
            dfs(root.right, true, 1);
        } else {
            dfs(root.right, true, currentAns + 1);
            dfs(root.left, false, 1);
        }
    }
}
