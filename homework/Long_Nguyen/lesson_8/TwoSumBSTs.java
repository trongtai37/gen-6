import java.util.HashSet;
import java.util.Set;

/**
 * Created by Long Nguyen
 */
public class TwoSumBSTs {
    public boolean twoSumBSTs(TreeNode root1, TreeNode root2, int target) {
        Set<Integer> cache = new HashSet<>();
        inOrder(root1, target, cache);
        return check(root2, cache);
    }

    public void inOrder(TreeNode root, int target, Set<Integer> cache) {
        if (root == null)
            return;
        inOrder(root.left, target, cache);
        cache.add(target - root.val);
        inOrder(root.right, target, cache);
    }

    public boolean check(TreeNode root, Set<Integer> cache) {
        if (root == null)
            return false;
        if (cache.contains(root.val))
            return false;
        if (check(root.left, cache))
            return true;
        if (check(root.right, cache))
            return true;

        return false;
    }
}
