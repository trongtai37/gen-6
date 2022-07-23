<?php

class KClosestPoints {

    /**
     * @param Integer[][] $points
     * @param Integer $k
     * @return Integer[][]
     */
    function kClosest($points, $k) {
        $sortArray = [];
        foreach($points as $key => $singlePoint) {
            $area = pow(abs($singlePoint[0]), 2) + pow(abs($singlePoint[1]), 2);
            $sortArray[] = $area;
        }

        sort($sortArray);
        $result = [];

        foreach ($points as $final) {
            if (pow(abs($final[0]), 2) + pow(abs($final[1]), 2) <= $sortArray[$k - 1]) {
                $result[] = $final;
            }
        }

        return $result;
    }
}

$test = new KClosestPoints;

var_dump($test->kClosest([[1,3],[-2,2]],1));