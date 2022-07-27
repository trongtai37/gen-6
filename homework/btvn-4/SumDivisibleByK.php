<?php

class SumDivisibleByK
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraysDivByK($nums, $k)
    {
        $prefixMod = $this->prefixMod($nums, $k);

        [$countMod, $count] = $this->hashMap($prefixMod);

        foreach ($countMod as $value) {
            $count = $count + $this->determineNumberOfPairs($value);
        }

        return $count;
    }

    public function prefixMod($nums, $k)
    {
        $sum = 0;

        foreach ($nums as $key => &$singleNum) {
            $sum = $sum + $singleNum;

            $singleNum = (($sum % $k) + $k) % $k;
        }

        return $nums;
    }

    public function hashMap($nums)
    {
        $countMod = [];
        $count = 0;
        foreach ($nums as $singleMod) {
            if ($singleMod == 0) {
                $count++;
            }
            if (empty($countMod[$singleMod])) {
                $countMod[$singleMod] = 1;
            } else {
                $countMod[$singleMod]++;
            }
        }

        return [$countMod, $count];
    }

    public function determineNumberOfPairs($n)
    {
        return $n * ($n - 1) / 2;
    }
}


$test = new SumDivisibleByK();

var_dump($test->subarraysDivByK([8, 9, 7, 8, 9], 8));
