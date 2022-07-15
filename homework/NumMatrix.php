$<?php
class NumMatrix {

    protected $matrix;
    protected $sumMatrix;

    /**
     * @param $matrix
     */
    function __construct($matrix) {
        $this->matrix = $matrix;
        foreach ($matrix as $n => $array) {
            foreach ($array as $m => $singleNumber) {
                if ($n == 0) {
                    if ($m == 0) {
                        $this->sumMatrix[$n][$m] = $matrix[$n][$m];
                    } else {
                        $this->sumMatrix[$n][$m] = $matrix[$n][$m] + $this->sumMatrix[$n][$m - 1];
                    }
                } else {
                    if ($m == 0) {
                        $this->sumMatrix[$n][$m] = $matrix[$n][$m] + $this->sumMatrix[$n - 1][$m];
                    } else {
                        $this->sumMatrix[$n][$m] = $this->sumMatrix[$n - 1][$m] + $this->sumMatrix[$n][$m - 1] - $this->sumMatrix[$n - 1][$m - 1] + $matrix[$n][$m];
                    }
                }
            }
        }
    }

    /**
     * @param Integer $row1
     * @param Integer $col1
     * @param Integer $row2
     * @param Integer $col2
     * @return Integer
     */
    function sumRegion($row1, $col1, $row2, $col2) {
        if ($row1 == 0) {
            if ($col1 == 0) {
                return $this->sumMatrix[$row2][$col2];
            } else {
                $n1 = 0;
            }
        } else {
            $n1 = $this->sumMatrix[$row1 - 1][$col2];
        }

        if ($col1 == 0) {
            if ($row1 == 0) {
                return $this->sumMatrix[$row2][$col2];
            } else {
                $n2 = 0;
            }
        } else {
            $n2 = $this->sumMatrix[$row2][$col1 - 1];
        }
        if ($row1 == 0 or $row2 == 0) {
            $n3 = 0;
        } else {
            $n3 = $this->sumMatrix[$row1 - 1][$col1 - 1];
        }

        return $this->sumMatrix[$row2][$col2] - $n1 - $n2 + $n3;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * $obj = NumMatrix($matrix);
 * $ret_1 = $obj->sumRegion($row1, $col1, $row2, $col2);
 */

 $matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]];
 $obj = new NumMatrix($matrix);
 $ret_1 = $obj->sumRegion(1, 1, 0, 0);

 var_dump($ret_1);