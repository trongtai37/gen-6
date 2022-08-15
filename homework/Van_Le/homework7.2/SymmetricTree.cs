public class SymmetricTree {
    public bool IsSymmetric(TreeNode root) {
        return IsTheSame(root, root);
    }
    
    private bool IsTheSame(TreeNode tree1, TreeNode tree2){
        if(tree1 == null && tree2 == null) return true;
        if(tree1 == null || tree2 == null) return false;
        
        return tree1.val == tree2.val && IsTheSame(tree1.right, tree2.left)
            && IsTheSame(tree1.left, tree2.right);
    }
}