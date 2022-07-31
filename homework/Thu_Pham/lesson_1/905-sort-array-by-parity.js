//Solution for https://leetcode.com/problems/sort-array-by-parity/

/*
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else if (nums[right] % 2 === 1) {
      right--;
    } else if (nums[left] % 2 === 1) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
  return nums;
};

//runtime O(n), where n is the length of nums
//space O(1) extra space
