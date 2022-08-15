public class HouseRobberIII
{
    public bool HasPathSum(TreeNode root, int targetSum)
    {
        public int Rob(TreeNode root)
        {
            var (withRoot, withoutRoot) = DFS(root);
            return Math.Max(withRoot, withoutRoot);
        }

        private (int, int) DFS(TreeNode root)
        {
            if (root == null) return (0, 0);

            var (leftWithRoot, leftWithoutRoot) = DFS(root.left);
            var (rightWithRoot, rightWithoutRoot) = DFS(root.right);

            var withRoot = root.val + leftWithoutRoot + rightWithoutRoot;
            var withoutRoot = Math.Max(leftWithRoot, leftWithoutRoot) + Math.Max(rightWithRoot, rightWithoutRoot);

            return (withRoot, withoutRoot);
        }
    }
}
