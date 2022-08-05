<?php
class SortArray{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParity($nums) {
        $left = 0;
        $right = count($nums) - 1;
        do {
            if ($nums[$left] % 2 != 0){
                $middle = $nums[$left];
                $nums[$left] = $nums[$right];
                $nums[$right] = $middle;
                $right--;
            } else {
                $left++;
            }
        }
        while ($left <= $right);

        return $nums;
    }
}

$action = new SortArray();

$result = $action->sortArrayByParity([5,5,5,5,5,5,5,2]);

var_dump($result);
