<?php

class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function hammingWeight(int $n) {
        if (!$n) {
            return 0;
        }
        $resull = 0;
        while($n) {
            if ($n&1) {
                $result++;
            }
            $n = $n >> 1;
        }
        return $result;
    }
}