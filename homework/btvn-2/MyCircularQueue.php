<?php


class MyCircularQueue {
    protected array $queue;
    protected int $lengthOfQueue;
    /**
     * @param Integer $k
     */
    function __construct($k) {
        $this->lengthOfQueue = $k;
        $this->queue = [];
    }

    /**
     * @param Integer $value
     * @return Boolean
     */
    function enQueue($value) {
        if (count($this->queue) < $this->lengthOfQueue) {
            $this->queue[] = $value;

            return true;
        }
        return false;
    }

    /**
     * @return Boolean
     */
    function deQueue() {
        if (count($this->queue) <= $this->lengthOfQueue and count($this->queue) > 0) {
            array_shift($this->queue);

            return true;
        }
        return false;
    }

    /**
     * @return Integer
     */
    function Front() {
        if(!empty($this->queue))
        {
            return $this->queue[0];
        }

        return -1;
    }

    /**
     * @return Integer
     */
    function Rear() {
        if(!empty($this->queue))
        {
            return end($this->queue);
        }

        return -1;
    }

    /**
     * @return Boolean
     */
    function isEmpty() {
        return empty($this->queue);
    }

    /**
     * @return Boolean
     */
    function isFull() {
        if (count($this->queue) == $this->lengthOfQueue)
        {
            return true;
        }

        return false;
    }
}


//Your MyCircularQueue object will be instantiated and called as such:
$k = 3;
$obj = new MyCircularQueue($k);
var_dump($obj->isEmpty());
var_dump($obj->enQueue(1));;
var_dump($obj->enQueue(10));;
var_dump($obj->enQueue(100));;
var_dump($obj->enQueue(1000));;
var_dump($obj->deQueue());;
var_dump($obj->Front());
var_dump($obj->Rear());
var_dump($obj->isEmpty());
var_dump($obj->enQueue(1000));;
var_dump($obj->isFull());

