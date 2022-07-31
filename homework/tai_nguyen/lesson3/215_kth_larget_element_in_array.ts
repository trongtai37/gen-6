function partition(nums: number[], l: number, r: number): number {
  let k = l;
  const p = nums[r];

  for (let j = l; j < r; j++) {
    if (nums[j] < p) {
      [nums[k], nums[j]] = [nums[j], nums[k]];
      k++;
    }
  }

  [nums[k], nums[r]] = [nums[r], nums[k]];

  return k;
}

function quickSelect(
  nums: number[],
  k: number,
  left: number = 0,
  right: number = nums.length - 1
): number | undefined {
  if (k > nums.length) {
    return undefined;
  }

  if (left > right) {
    return undefined;
  }

  const p = partition(nums, left, right);
  if (p === k - 1) {
    return nums[p];
  }

  if (p < k - 1) {
    return quickSelect(nums, k, p + 1, right);
  }

  return quickSelect(nums, k, left, p - 1);
}

function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  return quickSelect(nums, n - k + 1)!;
};
