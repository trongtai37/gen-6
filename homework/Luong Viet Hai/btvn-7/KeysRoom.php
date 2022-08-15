<?php


class KeysRoom 
{
    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    public function canVisitAllRooms($rooms)
    {
        $compare = array_fill(0, count($rooms), false);
        $this->bfp(0, $compare, $rooms);
        return (!in_array(false, $compare));
    }

    public function bfp($room, &$compare, $rooms)
    {
        if ($compare[$room] == true)
        {return;}
        $compare[$room] = true;
        foreach ($rooms[$room] as $singleKey) {
            $this->bfp($singleKey,$compare, $rooms);
        }
    }
}

$test = new KeysRoom();

var_dump($test->canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));die;