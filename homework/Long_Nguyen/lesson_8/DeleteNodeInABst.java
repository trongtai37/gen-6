/**
 * Created by Long Nguyen
 */
public class DeleteNodeInABst {
    public int predecessor(TreeNode root) {
        root = root.right;
        while (root.left != null)
            root = root.left;

        return root.val;
    }

    public int successor(TreeNode root) {
        root = root.left;
        while (root.right != null)
            root = root.right;

        return root.val;
    }

    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null)
            return null;
        if (root.val == key) {
            if (root.left == null && root.right == null) {
                root = null;
            } else {
                if (root.left != null) {
                    root.val = predecessor(root);
                    deleteNode(root.left, root.val);
                } else {
                    if (root.right != null) {
                        root.val = successor(root);
                        deleteNode(root.right, root.val);
                    }
                }
            }
        } else {
            if (root.val < key) {
                root.right = deleteNode(root.right, key);
            } else {
                root.left = deleteNode(root.left, key);
            }
        }

        return root;
    }

}
