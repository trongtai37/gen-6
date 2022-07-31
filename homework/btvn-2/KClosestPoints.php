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
        $sortArray = $this->mergeSort($sortArray);

        $result = [];

        foreach ($points as $final) {
            if (pow(abs($final[0]), 2) + pow(abs($final[1]), 2) <= $sortArray[$k - 1]) {
                $result[] = $final;
            }
        }

        return $result;
    }

    function mergeSort($Array)
    {
        $len = count($Array);
        if($len==1){
            return $Array;
        }
        $mid = (int)$len / 2;
        $left = $this->mergeSort(array_slice($Array, 0, $mid));
        $right = $this->mergeSort(array_slice($Array, $mid));
        return $this->merge($left, $right);
    }

    function merge($left, $right)
    {
        $res = array();

        while (count($left) > 0 && count($right) > 0)
        {
            if($left[0] > $right[0])
            {
                $res[] = $right[0];
                $right = array_slice($right , 1);
            }
            else
            {
                $res[] = $left[0];
                $left = array_slice($left, 1);
            }
        }

        while (count($left) > 0)
        {
            $res[] = $left[0];
            $left = array_slice($left, 1);
        }

        while (count($right) > 0)
        {
            $res[] = $right[0];
            $right = array_slice($right, 1);
        }

        return $res;
    }
}

$test = new KClosestPoints;



//var_dump($test->kClosest([[1,3],[-2,2]],1));
var_dump($test->kClosest([[1,3],[-2,2],[1,1]],1));
//var_dump($test->kClosest([[1,3],[-2,2],[-1,-10],[-2,-9],[-1,0]],1));