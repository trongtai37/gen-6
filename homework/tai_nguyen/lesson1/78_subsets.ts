function getBit(x: number, position: number) {
  return (x >> position) & 1;
}

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  for (let step = 0; step < (1 << nums.length); step++) {
    const set: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (getBit(step, i) === 1) {
        set.push(nums[i])
      }
    }
    res.push(set);
  }

  return res;
};