<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParity(array $nums): array {
        foreach ($nums as $index => $num) {
            if ($num % 2 == 0) {
                for ($i = 0; $i < $index; $i++) {
                    if ($nums[$i] % 2 != 0) {
                        $tmp = $nums[$i];
                        $nums[$i] = $num;
                        $nums[$index] = $tmp;
                        break;
                    }
                }
            }
        }
        return $nums;
    }
}
