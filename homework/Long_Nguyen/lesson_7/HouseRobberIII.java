import java.util.HashMap;
import java.util.Map;

// https://leetcode.com/problems/house-robber-iii
public class HouseRobberIII {
    public int rob(TreeNode root) {
        return solver(root, new HashMap<>());
    }

    private int solver(TreeNode root, Map<TreeNode, Integer> dp) {
        if (root == null)
            return 0;

        int valueIfRobCurrent = root.val;
        if (dp.containsKey(root))
            return dp.get(root);

        if (root.left != null) {
            valueIfRobCurrent += (solver(root.left.left, dp) + solver(root.left.right, dp));
        }
        if (root.right != null) {
            valueIfRobCurrent += (solver(root.right.left, dp) + solver(root.right.right, dp));
        }

        int valueIfNotRobCurrent = solver(root.left, dp) + solver(root.right, dp);
        int ans = Math.max(valueIfRobCurrent, valueIfNotRobCurrent);
        dp.put(root, ans);

        return ans;
    }
}
