function findMin(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  if (nums.length === 1) return nums[0];

  if (nums[l] < nums[r]) {
    return nums[l];
  }

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] >= nums[l]) {
      // left side of mid is sorted array
      if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1];
      }
      l = mid + 1;
    } else {
      // right side of mid is a sorted array
      r = mid - 1;
    }
  }

  return -1;
}
