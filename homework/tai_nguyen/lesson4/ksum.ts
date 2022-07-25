function twoSum(
  nums: number[], // array already sorted
  target: number,
  left: number = 0,
  right: number = nums.length - 1
): number[][] {
  const res: number[][] = [];

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      res.push([nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) left++;
      while (left < right && nums[left] === nums[left - 1]) right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

function kSum(
  nums: number[], // array already sorted
  target: number,
  k: number,
  left: number = 0,
  right: number = nums.length - 1
): number[][] {
  const res: number[][] = [];

  if (!nums.length || right - left + 1 < k) {
    return [];
  }

  const average = target / k;
  if (average > nums[right] || average < nums[left]) {
    return [];
  }

  if (k === 2) {
    return twoSum(nums, target, left, right);
  }

  for (let i = left; i <= right - k + 1; i++) {
    if (i > left && nums[i] === nums[i - 1]) continue;

    res.push(
      ...kSum(nums, target - nums[i], k - 1, i + 1, nums.length - 1).map(
        (item) => [nums[i], ...item]
      )
    );
  }

  return res;
}

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 4);
}

console.log(fourSum([2, 2, 2, 2], 8));
