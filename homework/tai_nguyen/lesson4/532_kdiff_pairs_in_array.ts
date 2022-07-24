function findPairs(nums: number[], k: number): number {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    // 1: value exist more than 1 time
    // 0: value exist 1 time
    map.set(num, map.has(num) ? 1 : 0);
  });

  let res = 0;
  for (const [key, value] of map.entries()) {
    const target = key + k;
    // Case k = 0
    if (k === 0 && value === 1) res++;

    // Case k != 0
    if (k !== 0 && map.has(target)) res++;
  }

  return res;
}
