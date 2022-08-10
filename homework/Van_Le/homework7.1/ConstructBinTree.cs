public class ConstructBinTree
{
    Dictionary<int, int> dict;
    int preIndex;
    
    public void BuildDict(int[] inorder) {
        int inLen = inorder.Length;
        
        for (int i = 0; i < inLen; i++)
            dict.Add(inorder[i], i);
    }
    
    public TreeNode Helper(int[] preorder, int[] inorder, int left, int right) {
        if (left > right)
            return null;
        
        TreeNode root = new TreeNode(preorder[preIndex++]);
        
        int inIndex = dict[root.val];
        
        root.left = Helper(preorder, inorder, left, inIndex - 1);
        root.right = Helper(preorder, inorder, inIndex + 1, right);
        
        return root;
    }
    
    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        dict = new Dictionary<int, int>();
        preIndex = 0;
        
        BuildDict(inorder);
        return Helper(preorder, inorder, 0, preorder.Length - 1);
    }
}

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}