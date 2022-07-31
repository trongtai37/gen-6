function maxSubArray(nums: number[]): number {
  let minSumFromStart = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    nums[i] += nums[i - 1] ?? 0;
    maxSum = Math.max(maxSum, nums[i] - minSumFromStart);
    minSumFromStart = Math.min(minSumFromStart, nums[i]);
  }

  return maxSum;
}
