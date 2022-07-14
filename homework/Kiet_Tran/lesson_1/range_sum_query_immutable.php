<?php

class NumArray {
    private $nums = [];
    
    /**
     * @param Integer[] $nums
     */
    function __construct(array $nums) {
        $eachSum = 0;
        $preCompute = [];
        foreach ($nums as $n) {
            $eachSum += $n;
            $preCompute[] = $eachSum;
        }
        $this->nums = $preCompute;
    }
  
    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function sumRange(int $left, int $right): int {
        if ($left == 0) {
            return $this->nums[$right];
        }
        
        return $this->nums[$right] - $this->nums[$left - 1];
    }
}
