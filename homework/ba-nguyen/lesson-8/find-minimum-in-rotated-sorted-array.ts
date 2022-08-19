function findMin(numbs: number[]): number {
  let lo = 0;
  let hi = numbs.length - 1;

  if (numbs[lo] <= numbs[hi]) return numbs[lo];

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (numbs[mid] > numbs[mid + 1]) return numbs[mid + 1];

    if (numbs[mid] >= numbs[lo]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}
