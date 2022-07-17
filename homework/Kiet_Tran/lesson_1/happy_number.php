<?php

class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isHappy(int $n): bool {
        if ($n == 1) {
            return true;
        }

        $slow = $n;
        $fast = $this->getSumOfSquares($n);
        
        while($fast != 1 && $slow != $fast) {
            $slow = $this->getSumOfSquares($slow);
            $fast = $this->getSumOfSquares($this->getSumOfSquares($fast));
        }
        
        return ($fast == 1) ? true : false;
    }
    
    // Get next value
    private function getSumOfSquares(int $n): int {
        $str = (string)$n;
        $sum = 0;
        foreach (str_split($str) as $d) {
            $sum += pow((int)$d, 2);
        }
        return $sum;
    }
}
