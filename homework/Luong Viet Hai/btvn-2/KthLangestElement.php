<?php


class KthLangestElement {

    function findKthLargest($nums, $k) {
        $arrayLength = count($nums);
        return $this->findKthLargestUtil($nums, $arrayLength - $k, 0, $arrayLength - 1);
    }

    function swap(&$x, &$y) {
        $tmp=$x;
        $x=$y;
        $y=$tmp;
    }

    function partition(&$arr, $l, $r) {
        $boundary = $l;

        $pivot = $arr[$r];

        for ($i = $l; $i < $r; $i++) {
            if($arr[$i] < $pivot) {
                $this->swap($arr[$i], $arr[$boundary]);
                $boundary++;
            }
        }

        $this->swap($arr[$r], $arr[$boundary]);

        return $boundary;
    }

    function findKthLargestUtil(&$nums, $kth, $l, $r) {
        $pivot = $this->partition($nums, $l, $r);

        if ($pivot  == $kth) {
            return $nums[$kth];
        } else if ($pivot > $kth) {
            return $this->findKthLargestUtil($nums, $kth, $l, $pivot - 1);
        } else {
            return $this->findKthLargestUtil($nums, $kth, $pivot + 1, $r);
        }
    }
}


$test = new KthLangestElement();

var_dump($test->findKthLargest([3,2,1,5,6,4], 2));
var_dump($test->findKthLargest([3,2,1,5,6,4], 1));