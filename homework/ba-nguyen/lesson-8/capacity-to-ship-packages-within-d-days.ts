function shipWithinDays(weights: number[], days: number): number {
  let lo = 0;
  let hi = weights.reduce((prev, curr) => prev + curr, 0);
  let res = -1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canShip(weights, days, mid)) {
      res = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return res;
}

function canShip(weights: number[], days: number, mid: number) {
  let count = 1;
  let sum = 0;

  for (const weight of weights) {
    if (sum + weight <= mid) {
      sum += weight;
    } else {
      count++;
      if (count > days || weight > mid) {
        return false;
      } else {
        sum = weight;
      }
    }
  }

  return true;
}
