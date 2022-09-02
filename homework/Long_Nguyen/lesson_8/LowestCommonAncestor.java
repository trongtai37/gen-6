/**
 * Created by Long Nguyen
 */
public class LowestCommonAncestor {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || p == null || q == null)
            return null;

        while (root != null) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else {
                if (root.val < p.val && root.val < q.val) {
                    root = root.right;
                } else {
                    return root;
                }
            }
        }

        return null;
    }
}
