function front(dequeue: number[]) {
  if (dequeue.length) {
    return dequeue[0];
  }

  return undefined;
}

function back(dequeue: number[]) {
  if (dequeue.length) {
    return dequeue[dequeue.length - 1];
  }

  return undefined;
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = [];
  const dequeue: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (dequeue.length && nums[back(dequeue)!] < nums[i]) {
      dequeue.pop();
    }

    dequeue.push(i);
    if (front(dequeue)! < i - k + 1) {
      dequeue.shift();
    }

    if (i >= k - 1) {
      res.push(nums[front(dequeue)!]);
    }
  }

  return res;
}
