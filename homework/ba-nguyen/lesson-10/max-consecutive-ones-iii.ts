function longestOnes(numbs: number[], k: number): number {
  let slow = 0;
  let fast = 0;
  let res = 0;
  const n = numbs.length;
  let zero = numbs[0] === 0 ? 1 : 0;

  while (fast < n) {
    if (zero <= k) {
      res = Math.max(res, fast - slow + 1);
      fast++;
      if (fast < n) {
        zero += Number(numbs[fast] === 0);
      }
    } else {
      if (numbs[slow] === 0) zero--;
      slow++;
    }
  }

  return res;
}
