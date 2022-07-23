function hasCycle(head: ListNode | null): boolean {
  let slowRunner = head;
  let fastRunner = head?.next;

  while (
    slowRunner !== fastRunner &&
    slowRunner &&
    fastRunner &&
    fastRunner.next
  ) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }

  return slowRunner === fastRunner;
}
