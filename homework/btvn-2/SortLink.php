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

class SortLink
{
    /**
     * @param ListNode $head
     * @return ListNode
     */
    function sortList($head) {
        $linkListToArray = $this->convertLinkListToArray($head);

        rsort($linkListToArray);

        return $this->convertArrayToLinkList($linkListToArray);
    }

    function convertLinkListToArray($head)
    {
        $linkListToArray = [];

        $current = $head;

        do {
            $linkListToArray[] = $current->val;
            $current = $current->next;
        }
        while($current != null);

        return $linkListToArray;
    }

    function convertArrayToLinkList($linkListArray)
    {
        foreach ($linkListArray as $key => &$value)
        {
            if ($key == 0) {
                $node = new ListNode($value);
                var_dump($value);
                $mark = $node;
            } else {
                $node = new ListNode($value);
                $node->next = $mark;
                $mark = $node;
            }
        }

        return $mark;
    }
}

$node1 = new ListNode(1);
$node2 = new ListNode(2);
$node3 = new ListNode(3);

$node1->next = &$node2;
$node2->next = &$node3;
$test = (new SortLink)->sortList($node1);

var_dump($test);