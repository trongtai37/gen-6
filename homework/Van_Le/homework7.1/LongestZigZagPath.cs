// explaination: https://bit.ly/3JEJkJU
public class LongestZigZagPath
{
    private enum Direction { Left, Right };
    public int LongestZigZag(TreeNode root)
    {
        int toLeft = LongestZigZag(root.left, Direction.Left, 0);
        int toRight = LongestZigZag(root.right, Direction.Right, 0);
        return Math.Max(
            toLeft,
            toRight
        );
    }

    private int LongestZigZag(TreeNode node, Direction direction, int length)
    {
        if (node == null)
            return length;
        if (direction == Direction.Left)
        {
            int leftToRight = LongestZigZag(node.right, Direction.Right, length + 1);
            int leftToLeft = LongestZigZag(node.left, Direction.Left, 0);
            return Math.Max(
                leftToRight,
                leftToLeft
            );
        }
        int rightToLeft = LongestZigZag(node.left, Direction.Left, length + 1);
        int rightToRight = LongestZigZag(node.right, Direction.Right, 0);
        return Math.Max(
            rightToRight,
            rightToLeft
        );
    }
}

public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}