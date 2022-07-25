function productExceptSelf(nums: number[]): number[] {
  const res = new Array(nums.length).fill(1);

  let cache = 1;

  for (let i = 0; i < nums.length; i++) {
    cache *= (nums[i - 1] ?? 1);
    res[i] = cache;
  }

  cache = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    cache *= (nums[i + 1] ?? 1)
    res[i] *= cache;
  }

  return res;
};