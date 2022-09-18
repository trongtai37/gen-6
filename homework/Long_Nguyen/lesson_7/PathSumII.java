import java.util.ArrayList;
import java.util.List;

// https://leetcode.com/problems/path-sum-ii
public class PathSumII {
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;
        helper(root, targetSum, new ArrayList<>(), result);
        return result;
    }

    private void helper(TreeNode root, int target, List<Integer> current, List<List<Integer>> result) {
        if (root == null)
            return;

        current.add(root.val);
        if (root.left == null && root.right == null && root.val == target) {
            result.add(new ArrayList<>(current));
            current.remove(current.size() - 1);
            return;
        } else {
            helper(root.left, target - root.val, current, result);
            helper(root.right, target - root.val, current, result);
        }
        current.remove(current.size() - 1);
    }

//    public static void main(String[] args) {
//        PathSumII sol = new PathSumII();
//        TreeNode root = new TreeNode(5);
//        root.left = new TreeNode(4);
//        root.left.left = new TreeNode(11);
//        root.left.left.left = new TreeNode(7);
//        root.left.left.right = new TreeNode(2);
//
//        root.right = new TreeNode(8);
//        root.right.left = new TreeNode(13);
//        root.right.right = new TreeNode(4);
//        root.right.right.right = new TreeNode(1);
//
//        sol.pathSum(root, 22);
//    }
}
