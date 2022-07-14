<?php

class NumMatrix {
    private $prefixSum = [];
    /**
     * @param Integer[][] $matrix
     */
    function __construct($matrix) {
        $n = count($matrix);
        $m = count($matrix[0]);
        $prefixSum = [];
        for ($i = 1; $i <= $n; $i++) {
            for ($j = 1; $j <= $m; $j++) {
                $prefixSum[$i][$j] = $matrix[$i-1][$j-1] + $prefixSum[$i-1][$j] + $prefixSum[$i][$j-1] - $prefixSum[$i-1][$j-1];
            }
        }
        $this->prefixSum = $prefixSum;
    }
  
    /**
     * @param Integer $row1
     * @param Integer $col1
     * @param Integer $row2
     * @param Integer $col2
     * @return Integer
     */
    function sumRegion($row1, $col1, $row2, $col2) {
        $prefixSum = $this->prefixSum;
        $row1 += 1; $col1 += 1; $row2 += 1; $col2 += 1;
        return $prefixSum[$row2][$col2] - $prefixSum[$row2][$col1-1] - $prefixSum[$row1-1][$col2] + $prefixSum[$row1-1][$col1-1];
    }
}
