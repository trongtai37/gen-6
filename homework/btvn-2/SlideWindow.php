<?php


class SlideWindow
{
    function maxSlidingWindow(array $nums, $k) {
        $result = [];
        $queue = new MyCircularQueue($k);
        foreach($nums as $key => $initValue) {
            if ($key < ($k)) {
                $queue->enQueue($initValue);
                unset($nums[$key]);
            } else {
                break;
            }
        }
        $result[] = $max = $queue->maxValue();
        foreach ($nums as $continueValue) {
            $queue->deQueue();
            $queue->enQueue($continueValue);
            if ($k > 1) {
                if ($continueValue > $max)
                {
                    $result[] = $continueValue;
                    $max = $continueValue;
                } else {
                    $result[] = $queue->maxValue();
                }
            } else {
                $result[] = $continueValue;
            }
        }

        return $result;
    }
}


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

    function maxValue() {
        // tricky function, if it's is queue, should use loop and check each value of queue.
        return max($this->queue);
    }
}

$slide = new SlideWindow();

var_dump($slide->maxSlidingWindow([7,2,4], 2));die;