// Solution for https://leetcode.com/problems/two-sum-less-than-k/

var twoSumLessThanK = function (nums, k) {
  nums.sort((x, y) => x - y);

  let left = 0, right = nums.length - 1, ans = -1;

  while (right > left) {
    const tempSum = nums[left] + nums[right];

    if (tempSum < k) {
      ans = Math.max(ans, tempSum);
      left += 1;
    } else {
      right -= 1;
    }
  }

  return ans;
};