function hasCycle(head: ListNode | null): boolean {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer && fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next?.next;
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
}
