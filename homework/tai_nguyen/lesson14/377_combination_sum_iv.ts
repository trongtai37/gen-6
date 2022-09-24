function combinationSum4(nums: number[], target: number): number {
  const f = new Array(target + 1).fill(0);
  f[0] = 1;
  for (let i = 1; i <= target; i++) {
    nums.forEach((num) => {
      if (i - num >= 0) {
        f[i] += f[i - num];
      }
    });
  }

  return f[target];
}
