public class PathSumII{
    public IList<IList<int>> PathSum(TreeNode root, int targetSum) {
        var result = new List<IList<int>>();
        var currentPath = new Stack<int>();
        DFS(root, result, currentPath, targetSum);
        return result;
    }

    private void DFS(TreeNode node, IList<IList<int>> result, Stack<int> currentPath, int targetSum)
    {
        if (node == null)
            return;
            
        targetSum -= node.val;
        currentPath.Push(node.val);
            
        if (node.left == null && node.right == null)
        {
            if (targetSum == 0)
                result.Add(currentPath.Reverse().ToArray());                
        }
            
        DFS(node.left, result, currentPath, targetSum);
        DFS(node.right, result, currentPath, targetSum);
        currentPath.Pop();            
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