class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function divide(head: ListNode): ListNode[] {
  let slowPointer = head,
    fastPointer = head;

  while (fastPointer.next?.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next!;
  }

  const left = head;
  const right = slowPointer.next!;

  // divide at mid point
  slowPointer.next = null;

  return [left, right];
}

function mergeList(
  head1: ListNode | null,
  head2: ListNode | null
): ListNode | null {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  let dummy = new ListNode();
  const res = dummy;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      dummy.next = head1;
      dummy = dummy.next;
      head1 = head1.next;
    } else {
      dummy.next = head2;
      dummy = dummy.next;
      head2 = head2.next;
    }
  }

  if (head1) {
    dummy.next = head1;
  }

  if (head2) {
    dummy.next = head2;
  }

  return res.next;
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  const [leftHead, rightHead] = divide(head);
  const sortedLeft = sortList(leftHead);
  const sortedRight = sortList(rightHead);

  return mergeList(sortedLeft, sortedRight);
}
