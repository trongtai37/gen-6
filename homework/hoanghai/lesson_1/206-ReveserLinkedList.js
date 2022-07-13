/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // Always remember to use 2 variable, prev, next to solve
    let prev = null
    let next = null
    let current = head
    while(current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    head = prev
    return head
};