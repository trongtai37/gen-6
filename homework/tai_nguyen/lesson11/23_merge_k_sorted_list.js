var mergeKLists = function (lists) {
  const minHeap = new MinPriorityQueue({
    priority: (node) => node.val,
  });

  const dummy = new ListNode();
  let tail = dummy;

  lists.forEach((head) => {
    if (head) {
      minHeap.enqueue(head);
    }
  });

  while (minHeap.size()) {
    const top = minHeap.dequeue().element;
    tail.next = top;
    tail = tail.next;

    if (top.next) {
      minHeap.enqueue(top.next);
    }
  }

  return dummy.next;
};
