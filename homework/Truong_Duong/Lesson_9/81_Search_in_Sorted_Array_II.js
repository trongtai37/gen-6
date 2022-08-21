// Solution for https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;

  while (right >= left) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > nums[left]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
    else if (nums[mid] === nums[left]) {
      left++;
    }
    else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return false;
};