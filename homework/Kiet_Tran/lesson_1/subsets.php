<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function subsets(array $nums): array {
        if (count($nums) == 1) {
            return [[], [$nums[0]]];
        }
        
        $result = [];
        $n = count($nums);
        for ($i = 0; $i < pow(2, $n); $i++) {
            $caseArray = [];
            $case = sprintf("%0{$n}d", decbin($i));
            foreach (str_split($case) as $index => $bit) {
                if ($bit === '1') {
                    $caseArray[] = $nums[$index];
                }
            }
            $result[] = $caseArray;
        }
        return $result;
    }
}
