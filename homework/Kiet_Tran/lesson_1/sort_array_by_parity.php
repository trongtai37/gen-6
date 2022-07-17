<?php

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParity(array $nums): array {
        $result = [];

        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] % 2 == 0) {
                $result[] = $nums[$i];
            }
        }

        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] % 2 != 0) {
                $result[] = $nums[$i];
            }
        }

        return $result;
    }
}
