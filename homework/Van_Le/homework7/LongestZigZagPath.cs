public class LongestZigZagPath {
    private int Helper(TreeNode node, bool toLeft, IDictionary<(TreeNode node, bool left), int> cache, ref int res)
    {
        if (node == null)
        {
            return 0;
        }

        (TreeNode node, bool left) key = (node, toLeft);
        if (cache.ContainsKey(key))
        {
            return cache[key];
        }

        int l = 1;

        int leftLeft = Helper(node.left, true, cache, ref res);
        int leftRight = Helper(node.left, false, cache, ref res);
        int rightLeft = Helper(node.right, true, cache, ref res);
        int rightRight = Helper(node.right, false, cache, ref res);

        if (toLeft)
        {
            l += leftRight;
        }
        else
        {
            l += rightLeft;
        }

        res = Math.Max(res, l);

        cache[key] = l;
        return l;
    }

    public int LongestZigZag(TreeNode root)
    {
        IDictionary<(TreeNode node, bool left), int> cache = new Dictionary<(TreeNode node, bool left), int>();
        int res = 0;
        Helper(root, false, cache, ref res);
        Helper(root, true, cache, ref res);
        return res - 1;
    }
}