<?php

class Solution {
    /**
     * @param ListNode $head
     * @return Boolean
     */
    function hasCycle(?ListNode $head): bool {
        if ($head == null || $head->next == null) {
            return false;
        }
        
        $slow = $head;
        $fast = $head;
        
        while($fast != null && $fast->next != null) {
            $fast = ($fast->next)->next;
            $slow = $slow->next;
            
            if ($slow === $fast) {
                return true;
            }
        }
        
        return false;
    }
}
