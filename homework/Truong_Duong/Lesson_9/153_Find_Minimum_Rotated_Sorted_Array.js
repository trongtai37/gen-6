// Solution for https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function(nums) {
  let left = 0, right = nums.length - 1;

  while (right > left) {
    const mid = left + Math.floor((right - left) / 2);

    if(nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};