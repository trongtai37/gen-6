/**
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
    // compare node vs node, not value
    let slowNode = head
    let fastNode = head
    while(fastNode !== null && fastNode.next != null){
        slowNode = slowNode.next
        fastNode = fastNode.next.next
        if (slowNode === fastNode) return true
    }
    return false
};