// Solution for https://leetcode.com/problems/max-consecutive-ones-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
  const N = nums.length;
  let left = 0, right = 0, ans = 0;
  let zeroCount = nums[0] == 1 ? 0 : 1;
  
  while(right < N) {
      if(zeroCount <= k) {
          ans = Math.max(ans, right - left + 1);
          right += 1;
          if(right < N) {
              zeroCount += nums[right] === 0 ? 1 : 0;
          }
      } else {
          zeroCount -= nums[left] === 0 ? 1 : 0;
          left += 1;
      }
  }
  
  return ans;
};