import java.util.ArrayList;
import java.util.List;

/**
 * Created by Long Nguyen
 */
public class TwoSumIVInputIsABst {
    public void inOrder(TreeNode root, List<Integer> cache) {
        if (root == null)
            return;
        inOrder(root.left, cache);
        cache.add(root.val);
        inOrder(root.right, cache);
    }

    public boolean findTarget(TreeNode root, int k) {
        if (root == null)
            return false;

        List<Integer> cache = new ArrayList<>();
        inOrder(root, cache);

        int first = 0;
        int second = cache.size() - 1;

        while (first < second) {
            int sum = cache.get(first) + cache.get(second);
            if (sum == k)
                return true;
            if (sum < k) {
                first++;
            } else {
                second--;
            }
        }

        return false;
    }
}
