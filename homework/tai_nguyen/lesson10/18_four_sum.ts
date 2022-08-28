function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let l = j + 1,
        r = nums.length - 1;
      const missingPart = target - nums[i] - nums[j];
      while (l < r) {
        const sum = nums[l] + nums[r];

        if (sum === missingPart) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) l++;
          while (l < r && nums[r] === nums[r + 1]) r--;
        } else if (sum < missingPart) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return res;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2, 2, 2, 2, 2], 8));
