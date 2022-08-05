<?php

class NumArray
{
    /**
     * @param Integer[] $nums
     */
    protected $prefixSum = [];

    function __construct($nums)
    {
        foreach ($nums as $key => $singleNum)
        {
            if ($key == 0) {
                $this->prefixSum[$key] = $singleNum;
            } else {
                $this->prefixSum[$key] = $singleNum +  $this->prefixSum[$key - 1];
            }
        }
    }

    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function sumRange($left, $right)
    {
        if ($left == 0) {
            return $this->prefixSum[$right];
        }
        return $this->prefixSum[$right] - $this->prefixSum[$left - 1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * $obj = NumArray($nums);
 * $ret_1 = $obj->sumRange($left, $right);
 */

$obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var_dump($obj->sumRange(0, 2));
var_dump($obj->sumRange(2, 5));
var_dump($obj->sumRange(0, 5));
var_dump($obj->sumRange(1, 5));