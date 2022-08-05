<?php

class TreeNode
{
    public $val = null;
    public $left = null;
    public $right = null;

    function __construct($val = 0, $left = null, $right = null)
    {
        $this->val = $val;
        $this->left = $left;
        $this->right = $right;
    }
}

class Solution
{

    /**
     * @param TreeNode $root
     * @param Integer $targetSum
     * @return Boolean
     */

    protected $sum;
    protected $isSuccess = false;

    function hasPathSum($root, $targetSum)
    {
        $this->sum = $targetSum;
        $this->dfp($root, 0);

        return $this->isSuccess;
    }

    public function dfp(?TreeNode $node, $parentVal)
    {
        if ($node == null) return 0;
        if ($parentVal + $node->val === $this->sum and $node->left == null and $node->right == null) {
            $this->isSuccess = true;
            return $parentVal + $node->val;
        }

        $this->dfp($node->right, $parentVal + $node->val);
        $this->dfp($node->left, $parentVal + $node->val);

        return $parentVal + $node->val;
    }
}

$testNode = new TreeNode(1, (new TreeNode(2, null, null)), null);

$solution = new Solution();

var_dump($solution->hasPathSum($testNode, 1));