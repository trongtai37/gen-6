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
    protected $pathResult = [];

    function pathSum($root, $targetSum)
    {
        $this->sum = $targetSum;
        $this->dfp($root, []);

        return $this->pathResult;
    }

    public function dfp(?TreeNode $node, array $result)
    {
        if ($node == null) return [];

        $result[] = $node->val;
        if (array_sum($result) === $this->sum and $node->left == null and $node->right == null) {
            $this->pathResult[] = $result;
            return $result;
        }

        $this->dfp($node->right, $result);
        $this->dfp($node->left, $result);

        return $result;
    }
}

$testNode = new TreeNode(1, (new TreeNode(2, null, null)), null);

$solution = new Solution();