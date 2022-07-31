//Solution for https://leetcode.com/problems/linked-list-cycle/

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let fastPointer = head
    let slowPointer = head
    while (fastPointer && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next
        slowPointer = slowPointer.next
        if (fastPointer === slowPointer) return true
    }
    return false
};

//runtime O(n) with n is the length of the input linked list
//space O(1) extra space
