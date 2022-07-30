//Solution for https://leetcode.com/problems/subsets/

/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  for (let i = 0; i < Math.pow(2, nums.length); i++) {
    let subset = [];
    for (let position = 0; position < nums.length; position++) {
      if (getBit(i, position) === 1) subset.push(nums[position]);
    }
    result.push(subset);
  }
  return result;
};

var getBit = function (number, position) {
  //O(1)
  return (number >> position) & 1;
};

//runtime O(2^n * n * 1), where n is the length of nums
//space O(2^n), where n is the length of nums
