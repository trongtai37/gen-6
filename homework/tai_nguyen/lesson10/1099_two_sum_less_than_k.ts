function twoSumLessThanK(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let l = 0,
    r = nums.length - 1;
  let res = -Infinity;

  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum >= k) {
      r--;
    } else {
      res = Math.max(res, sum);
      l++;
    }
  }

  return res === -Infinity ? -1 : res;
}

console.log(twoSumLessThanK([10, 20, 30], 15));
