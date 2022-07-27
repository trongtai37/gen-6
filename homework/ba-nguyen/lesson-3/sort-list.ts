class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const mid = getMid(head);
  const left = sortList(head);
  const right = sortList(mid);
  return mergeSortList(left, right);
}

function mergeSortList(list1: ListNode | null, list2: ListNode | null) {
  let dummyHead = new ListNode();
  let headOfNewList = dummyHead;
  while (list1 && list2) {
    if (list1?.val < list2?.val) {
      dummyHead.next = list1;
      list1 = list1.next;
    } else {
      dummyHead.next = list2;
      list2 = list2.next;
    }
    dummyHead = dummyHead.next;
  }

  dummyHead.next = list1 !== null ? list1 : list2;
  return headOfNewList.next;
}

function getMid(head: ListNode | null) {
  let midPrev: ListNode | null = null;
  while (head && head.next) {
    midPrev = midPrev ? midPrev.next : head;
    head = head.next.next;
  }
  const mid = midPrev?.next as ListNode;
  //@ts-ignore
  midPrev.next = null;
  return mid;
}
