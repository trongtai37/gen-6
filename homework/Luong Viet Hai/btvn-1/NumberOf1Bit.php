<?php
class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function hammingWeight($n) {
        if ($n == 0) {
            return 0;
        }
        $count = 0;
        do {
            $n = $this->turnOfRightBit($n);
            $count++;
        }
        while ($n != 0);

        return $count;
    }

    function turnOfRightBit($n) {
        return $n & ($n-1);
    }
}


$test = new Solution();

var_dump($test->hammingWeight(000001000));
var_dump($test->hammingWeight(000001010));
var_dump($test->hammingWeight(001001010));
var_dump($test->hammingWeight(001001010));
var_dump($test->hammingWeight(001111010));
var_dump($test->hammingWeight(00000000000000000000000000001011));
var_dump($test->hammingWeight(0000000000000000000000000000));
