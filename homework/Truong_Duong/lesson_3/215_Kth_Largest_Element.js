// Solution for https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(nums, left, right) {
  boundary = left;
  pivot = nums[right];

  for (let i = left; i < right; i++) {
    if(nums[i] < pivot) {
      swap(nums, i, boundary);
      boundary++;
    }
  }
  swap(nums, right, boundary);
  return boundary;
}

function findKthLargestUtil(nums, pos, left, right) {
  const pivotIndex = partition(nums, left, right);

  if (pivotIndex === pos) {
    return nums[pos];
  } else if (pivotIndex > pos) {
    return findKthLargestUtil(nums, pos, left, boundary -1);
  } else {
    return findKthLargestUtil(nums, pos, boundary + 1, right);
  }
}

var findKthLargest = function(nums, k) {
  const N = nums.length;
  return findKthLargestUtil(nums, N-k, 0, N-1);
};