class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let originHead = head,
    tempHead = head;

  if (originHead === null) return null;

  while (originHead.next) {
    const movedNode = originHead.next;
    originHead.next = movedNode.next;
    movedNode.next = tempHead;
    tempHead = movedNode;
  }

  return tempHead;
}