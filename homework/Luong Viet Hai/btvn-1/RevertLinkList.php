<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */

class ListNode
{
    public $val = 0;
    public $next = null;

    function __construct($val)
    {
        $this->val = $val;
    }
}

class RevertLinkList
{
    /**
     * @param ListNode $head
     * @return ListNode
     */
    function reverseList($head) {
        $linkListToArray = $this->convertLinkListToArray($head);
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
$test = (new RevertLinkList)->reverseList($node1);

var_dump($test);