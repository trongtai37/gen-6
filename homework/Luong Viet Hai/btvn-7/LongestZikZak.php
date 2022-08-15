<?php

class TreeNode
{
    public $left = null;
    public $right = null;

    function __construct($left = null, $right = null)
    {
        $this->left = $left;
        $this->right = $right;
    }
}

class LongestZikZak
{
    function longestZigZag($root)
    {
        return $this->dfp($root, 0, true);
    }

    /**
     * @param TreeNode|null $node
     * @param $ZigzagCountBefore
     * @param $isLeft
     * @return int|mixed|null
     */
    public function dfp(?TreeNode $node, $ZigzagCountBefore, $isLeft)
    {
        if (empty($node)) {
            return $ZigzagCountBefore - 1;
        } else {
            // bên Trái
            if ($isLeft) {
                return max($this->dfp($node->right, $ZigzagCountBefore + 1, false),
                    $this->dfp($node->left, 1, true));
            }
            // ben phải
            else {
                return max($this->dfp($node->left, $ZigzagCountBefore + 1, true),
                    $this->dfp($node->right, 1, false));
            }
        }
    }
}


//$testNoe = new TreeNode(null, new TreeNode(new TreeNode(null, null), new TreeNode(new TreeNode(null, new TreeNode(null, new TreeNode(null, null))), new TreeNode(null, null))));
$testNoe = new TreeNode(null, new TreeNode(new TreeNode(null, null), new TreeNode(new TreeNode(null, new TreeNode(null, new TreeNode(null, null))), new TreeNode(null, null))));

$solution = new LongestZikZak();

var_dump($solution->longestZigZag($testNoe));die;
