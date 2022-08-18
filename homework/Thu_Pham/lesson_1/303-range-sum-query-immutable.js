//Solution for https://leetcode.com/problems/range-sum-query-immutable/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const prefix = [];
  prefix.push(this.nums[0]);
  for (let i = 1; i < this.nums.length; i++) { // O(n)
    prefix.push(this.nums[i] + prefix[i - 1]);
  }
  return left === 0 ? prefix[right] : prefix[right] - prefix[left - 1]; //O(1)
};

//runtime O(n) with n is the length of the array
//space O(n) with n is the length of the array 

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
