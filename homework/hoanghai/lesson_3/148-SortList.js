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

 function findMiddle(head) {
    let slow = head
    let fast = head.next
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}

function mergeSort(left, right) {
    if (left === null) {
        return right
    }
    if (right === null) {
        return left;
    }
    let sortList = new ListNode()
    let temp = sortList
    while (left !== null && right !== null) {
        if (left.val < right.val) {
            temp.next = left
            temp = left
            left = left.next
        }
        else {
            temp.next = right
            temp = right
            right = right.next
        }
    }
    while (left!==null) {
        temp.next = left
        temp = left
        left = left.next
    }
    while(right!==null) {
        temp.next = right
        temp = right
        right = right.next
    }
    sortList = sortList.next
    return sortList
}

var sortList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let mid = findMiddle(head)
    let left = head
    let right = mid.next
    mid.next = null
    left = sortList(left)
    right = sortList(right)
    let result = mergeSort(left, right)
    return result
};