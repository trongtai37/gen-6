class DoublyListNode<T> {
  val: T;
  prev: DoublyListNode<T> | null;
  next: DoublyListNode<T> | null;

  constructor(
    val: T,
    prev: DoublyListNode<T> | null = null,
    next: DoublyListNode<T> | null = null
  ) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class DoulyLinkedList<T> {
  private head: DoublyListNode<T> | null = null;

  constructor() {
    this.head = null;
  }

  get(index: number): T | -1 {
    let tempHead = this.head;

    while (tempHead && index--) {
      tempHead = tempHead.next;
    }

    return tempHead ? tempHead.val : -1;
  }

  addAtHead(val: T): void {
    const node = new DoublyListNode(val, null, this.head);

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;
  }

  addAtTail(val: T): void {
    let curr = this.head;

    if (curr) {
      while (curr?.next) {
        curr = curr.next;
      }
      const node = new DoublyListNode(val, curr, null);
      curr.next = node;
    } else {
      this.addAtHead(val);
    }
  }

  addAtIndex(index: number, val: T): void {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let curr = this.head;
    while (curr && index--) {
      curr = curr.next;
    }

    if (curr) {
      const prev = curr.prev;
      const node = new DoublyListNode(val, prev, curr);
      if (prev) {
        prev.next = node;
      }
      curr.prev = node;
    }
  }

  deleteAtIndex(index: number): void {
    let curr = this.head;

    while (curr && index--) {
      curr = curr.next;
    }

    if (curr) {
      const prev = curr.prev;
      const next = curr.next;

      if (prev) {
        prev.next = next;
      }

      if (next) {
        next.prev = prev;
      }

      if (!prev) {
        this.head = next;
      }
    }
  }
}

const dbLinkedList = new DoulyLinkedList<number>();
dbLinkedList.addAtHead(1);
// dbLinkedList.addAtTail(3);
// dbLinkedList.addAtIndex(1, 2);
// dbLinkedList.get(1);
// dbLinkedList.deleteAtIndex(1);
// dbLinkedList.get(1);
