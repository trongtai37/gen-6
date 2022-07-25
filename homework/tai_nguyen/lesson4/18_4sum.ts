function findTwoSum(
  nums: number[], // array already sorted
  target: number,
  left: number,
  right: number
): number[][] {
  const res: number[][] = [];
  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      res.push([left, right]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      const twoSumPairs = findTwoSum(
        nums,
        target - nums[i] - nums[j],
        j + 1,
        nums.length - 1
      );

      if (twoSumPairs.length) {
        twoSumPairs.forEach(([k, l]) => {
          ans.push([nums[i], nums[j], nums[k], nums[l]]);
        });
      }
    }
  }

  return ans;
}

console.log(fourSum([2, 2, 2, 2, 2], 8));
