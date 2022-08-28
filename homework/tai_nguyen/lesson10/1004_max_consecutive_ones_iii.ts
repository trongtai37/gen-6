function longestOnes(nums: number[], k: number): number {
  let l = 0,
    r = 0;
  let zeroCount = nums[0] === 0 ? 1 : 0;
  let res = 0;

  while (r < nums.length) {
    if (zeroCount <= k) {
      res = Math.max(res, r - l + 1);
      r++;
      if (r < nums.length) {
        if (nums[r] === 0) {
          zeroCount++;
        }
      }
    } else {
      if (nums[l] === 0) {
        zeroCount--;
      }
      l++;
    }
  }

  return res;
}
