function test(capacity: number, weights: number[], days: number) {
  let count = 0;
  let amount = 0;

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > capacity) return false;

    if (amount > 0 && amount + weights[i] > capacity) {
      count++;
      amount = weights[i];
    } else {
      amount += weights[i];
    }
  }

  if (amount > 0) count++;

  return count > 0 && count <= days;
}

function shipWithinDays(weights: number[], days: number): number {
  let l = 1,
    r = weights.reduce((a, b) => a + b, 0),
    res = 0;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (test(mid, weights, days)) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
}
