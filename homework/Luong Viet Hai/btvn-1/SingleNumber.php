<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber(array $nums) {
        $result = 0;
        foreach($nums as $key => $num)
        {
            if ($key = 0) {
                $result = $num;
                continue;
            }

            $result = ($result ^ $num);

        }

        return $result;
    }
}


$test = new Solution();

var_dump($test->singleNumber([1,2,2]));
var_dump($test->singleNumber([4,2,2]));
var_dump($test->singleNumber([1,1,2,2,3,3,4,4,5,5,7]));
var_dump($test->singleNumber([1,2,2]));
