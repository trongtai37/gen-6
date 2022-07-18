function partition(nums: number[], l: number, r: number): number {
  let k = l;
  const pivot = nums[r];

  for (let j = l; j < r; j++) {
    if (nums[j] < pivot) {
      [nums[j], nums[k]] = [nums[k], nums[j]];
      k++;
    }
  }

  [nums[r], nums[k]] = [nums[k], nums[r]];

  return k;
}

function quicksort(
  nums: number[],
  left: number = 0,
  right: number = nums.length - 1
) {
  if (left >= right) return;

  const pivot = partition(nums, left, right);

  quicksort(nums, left, pivot - 1);
  quicksort(nums, pivot + 1, right);
}
