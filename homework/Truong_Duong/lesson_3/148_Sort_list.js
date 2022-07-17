// Solution for https://leetcode.com/problems/sort-list/

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

function getAfterMidPointer(head){
  if (head === null) return head;
  let slow= head, fast= head;

  while(fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const afterMid = slow.next;
  slow.next = null;
  return afterMid;
}

function merge(left, right) {
  if (left === null) return right;
  if (right === null) return left;

  let result;
  if (left.val <= right.val) {
    result = left;
    result.next = merge(left.next, right);
  } else {
    result = right;
    result.next = merge(left, right.next);
  }
  return result;
}

var sortList = function(head) {
  if(head === null || head.next === null) return head;

  const afterMid = getAfterMidPointer(head);

  const left=sortList(head);
  const right=sortList(afterMid);

  return merge(left, right);
};