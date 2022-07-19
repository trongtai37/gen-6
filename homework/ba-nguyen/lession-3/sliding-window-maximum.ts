function maxSlidingWindow(numbs: number[], k: number): number[] {
  const dequeue: number[] = [];
  const result: number[] = [];
  for (let i = 0; i < numbs.length; i++) {
    if (dequeue.length === k) {
      dequeue.shift();
    }

    let boundary = 0;
    while (dequeue.length !== 0 && boundary < dequeue.length) {
      if (dequeue[boundary] < numbs[i]) {
        dequeue.shift();
      } else {
        boundary++;
      }
    }
    dequeue.push(numbs[i]);
    if (i >= k - 1) {
      result.push(dequeue[0]);
    }
  }

  return result;
}
