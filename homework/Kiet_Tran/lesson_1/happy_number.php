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

        $appeared = [];
        while($n != 1 && !in_array($n, $appeared)) {
            $appeared[] = $n;
            $n = $this->getSumOfSquares($n);
        }
        
        return ($n == 1) ? true : false;
    }
    
    private function getNumberDigits(int $n): int {
        $str = (string)$n;
        return count(str_split($str));
    }
    
    private function getSumOfSquares(int $n): int {
        $numberDigits = $this->getNumberDigits($n);
        $str = (string)$n;
        $sum = 0;
        foreach (str_split($str) as $d) {
            $sum += pow((int)$d, 2);
        }
        return $sum;
    }
}
