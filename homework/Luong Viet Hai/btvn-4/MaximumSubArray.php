<?php

class MaximumSubArray
{
    function maxSubArray($nums)
    {
        $sumCompare = 0;
        $sumTotal = PHP_INT_MIN;
        foreach ($nums as $key => $singleNum) {
            $sumCompare = $sumCompare + $singleNum;
            if ($sumCompare > $sumTotal) {
                $sumTotal = $sumCompare;
            }
            if ($sumCompare < 0) {
                $sumCompare = 0;
            }

        }

        return $sumTotal;
    }
}

$test = new MaximumSubArray();

var_dump($test->maxSubArray([-1]));