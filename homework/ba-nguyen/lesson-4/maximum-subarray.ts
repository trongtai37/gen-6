/**
 * Solution 1: Using prefixSums
 * Runtime: O(n)
 * Extra space: O(n)
 */
function maxSubArray(numbs: number[]): number {
  let minSoFar = 0;
  let maxSub = Number.MIN_SAFE_INTEGER;

  const prefixSum = [numbs[0]];
  for (let i = 1; i < numbs.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + numbs[i];
  }

  for (let i = 0; i < prefixSum.length; i++) {
    maxSub = Math.max(maxSub, prefixSum[i] - minSoFar);
    minSoFar = Math.min(minSoFar, prefixSum[i]);
  }

  return maxSub;
}

/**
 * Solution 2
 * Runtime: O(n)
 * Extra space: O(1)
 */
function maxSubArray1(numbs: number[]): number {
  let sum = 0;
  let maxSub = numbs[0];
  for (let i = 0; i < numbs.length; i++) {
    sum += numbs[i];
    maxSub = Math.max(maxSub, sum);

    // if sum plus numbs[i] < 0, reset sum = 0 because we don't care the negative value any more
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSub;
}
