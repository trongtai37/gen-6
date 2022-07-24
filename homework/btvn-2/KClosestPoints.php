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

    public function mergeSort($array)
    {
        if (count($array) <= 1) {
            return $array;
        }

        $left =  array();
        $right = array();

        $middle = (int) ( count($array)/2 );

        for ($i = 0; $i < $middle; $i ++)
        {
            $left[] = $array[$i];
        }

        for ($i = $middle; $i < count($array); $i ++)
        {
            $right[] = $array[$i];
        }


        // Merge sort left & right
        $this->mergeSort($left);
        $this->mergeSort($right);

        return $this->merge($left, $right);
    }


    public function merge($left, $right)
    {
        $result = [];

        $i = 0;
        $j = 0;

        while($i < count($left) && $j < count($right)) {
            if ($left[$i] < $right[$j]) {
                $result[] = $left[$i];

                $i++;
            } else {
                $result[] = $right[$j];
                $j++;
            }
        }

        while ($i < count($left)) {
            $result[] = $left[$i];
            $i ++;
        }

        while ($j < count($right)) {
            $result[] = $right[$i];
            $i ++;
        }

        return $result;
    }
}

$test = new KClosestPoints;



var_dump($test->kClosest([[1,3],[-2,2]],1));