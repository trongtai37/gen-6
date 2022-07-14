<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums) {
        $result = 0;
        foreach ($nums as $x) {
            $result ^= $x;
        }
        return $result;
    }
}
