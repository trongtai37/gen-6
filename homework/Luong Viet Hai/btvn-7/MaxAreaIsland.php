<?php

class MaxAreaIsland
{
    private $n = 0;
    private $m = 0;
    private $dr = [0, 1, 0, -1];
    private $dc = [1, 0, -1, 0];
    private array $visited = [];
    private array $grid = [];
    private int $max = 0;

    function maxAreaOfIsland($grid)
    {
        $this->n = count($grid);
        $this->m = count($grid[0]);
        $this->grid = $grid;

        foreach ($this->grid as $keyRow => $singleRow) {
            foreach ($singleRow as $keyCol => $singleData) {
                if(!isset($this->visited[$keyRow][$keyCol]))
                {
                    var_dump([$keyRow, $keyCol]);
                    $this->dfs($keyRow, $keyCol, 0);
                }
            }
        }

        return $this->max;
    }

    function dfs(int $roll, int $column, $count)
    {
        $this->visited[$roll][$column] = true;
        if($this->grid[$roll][$count] == 1) {
            $count = $count + 1;
            for ($k = 0; $k < 4; $k++) {
                $i = $roll + $this->dr[$k];
                $j = $column + $this->dc[$k];
                if ($i >= 0 and $i < $this->n and $j >= 0 and $j < $this->m and !isset($this->visited[$i][$j])) {
                    $this->dfs($i, $j, $count);
                }
            }

            if ($count > $this->max) {
                $this->max = $count;
            }
        }
    }
}

$test = new MaxAreaIsland;
$maxArea = $test->maxAreaOfIsland(
    [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]
);

print_r($maxArea);