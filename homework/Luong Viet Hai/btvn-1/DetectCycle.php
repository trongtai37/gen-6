<?php

class ListNode
{
    public $val = 0;
    public $next = null;

    function __construct($val)
    {
        $this->val = $val;
    }
}

class DetectCycle
{
    function hasCycle($head)
    {
        $slowPointer = $head;
        $fastPointer = $head;

        do {
            $slowPointer = $slowPointer->next;
            $fastPointer = $fastPointer->next;

            if ($fastPointer != null) {
                $fastPointer = $fastPointer->next;
            }

            if ($slowPointer == null or $fastPointer == null) {
                return false;
            }

            if ($slowPointer === $fastPointer)
            {
                return true;
            }
        }
        while ($slowPointer !== $fastPointer);
    }
}
