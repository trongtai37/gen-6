public class PathSum
{
    public bool HasPathSum(TreeNode root, int targetSum)
    {
        // check the edge case whether the root node is null
        if (root == null) return false;

        // the input targetSum is substracted by the current node holding the value
        // until targetSum is becoming to 0
        targetSum -= root.val;

        // check the result when the current root is a leaf node
        // if that current root makes the targetSum become 0, then immediately return to true
        // otherwise, find another leaf node that makes the targetSum become 0
        if ((root.left == null) && (root.right == null))
            return targetSum == 0;

        // if the current leaf has its left node, then go left. Otherwise, go right.
        return HasPathSum(root.left, targetSum) || HasPathSum(root.right, targetSum);
    }
}
