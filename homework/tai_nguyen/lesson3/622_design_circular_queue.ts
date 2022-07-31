class MyCircularQueue {
  private head: number;
  private tail: number;
  private queue: number[];

  private getNextRight(currentPos: number): number {
    return (currentPos + 1) % this.queue.length;
  }

  constructor(k: number) {
    this.head = -1;
    this.tail = -1;
    this.queue = new Array(k);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
      this.queue[this.head] = value;
      return true;
    }

    this.tail = this.getNextRight(this.tail);
    this.queue[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }

    this.head = this.getNextRight(this.head);
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.head === -1 && this.tail === -1;
  }

  isFull(): boolean {
    return this.getNextRight(this.tail) === this.head;
  }
}
