<?php

class KDiff
{
    function run($nums, $k) {
//        $nums = array_unique($nums);
        sort($nums);
        $bound = 1;
        $result = [];
        foreach ($nums as $key => $num) {
            $target = $num + $k;
            do {
                if (($key + $bound) >= count($nums)) {
                    break;
                }
                if ($nums[$key + $bound] < $target) {
                    $bound ++;
                } elseif ($nums[$key + $bound] == $target) {
                    $result[] = [$num, $nums[$key + $bound]];
                    break;
                } else {
                    break;
                }
            } while($key + $bound <= count($nums));
            $bound = 1;
        }
        $result = array_unique($result, SORT_REGULAR);
        return count($result);
    }
}

$test = new KDiff();

//var_dump($test->run([1,3,1,5,4], 0));
var_dump($test->run(
    [6,7,3,6,4,6,3,5,6,9], 4));