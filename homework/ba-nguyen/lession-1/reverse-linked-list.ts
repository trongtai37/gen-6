class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  head = prev;
  return head;
}

function reverseListRecursively(
  prev: ListNode | null,
  curr: ListNode | null
): ListNode | null {
  if (curr === null) return prev;

  let next = curr.next;
  curr.next = prev;
  return reverseListRecursively(curr, next);
}

function reverseList1(head: ListNode | null): ListNode | null {
  return reverseListRecursively(null, head);
}
