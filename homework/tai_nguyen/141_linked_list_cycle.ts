function detectCycle(head: ListNode | null): ListNode | null {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next?.next!;

    // Floyd algorithm
    if (slowPointer === fastPointer) {
      while (head !== slowPointer) {
        head = head.next;
        slowPointer = slowPointer.next;
      }
    }

    return head;
  }

  return null;
}