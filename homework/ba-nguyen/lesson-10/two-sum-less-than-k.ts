function twoSumLessThanK(numbs: number[], k: number): number {
  numbs.sort((a, b) => a - b);
  let lo = 0;
  let hi = numbs.length - 1;
  let res = -1;

  while (lo < hi) {
    const sum = numbs[lo] + numbs[hi];

    if (sum < k) {
      res = Math.max(res, sum);
      lo++;
    } else {
      hi--;
    }
  }

  return res;
}
