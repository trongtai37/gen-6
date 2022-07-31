function positiveMod(num: number, k: number) {
  return ((num % k) + k) % k;
}

function subarraysDivByK(nums: number[], k: number): number {
  let res = 0;
  const map = new Map<number, number>();
  // Initialization for subarray divisible by k which start at position 0
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    nums[i] += nums[i - 1] ?? 0;
    const remainder = positiveMod(nums[i], k);
    if (!map.has(remainder)) {
      map.set(remainder, 0);
    }

    res += map.get(remainder)!;
    map.set(remainder, map.get(remainder)! + 1);
  }

  return res;
}
