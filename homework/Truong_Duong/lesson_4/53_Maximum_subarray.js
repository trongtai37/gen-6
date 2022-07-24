// Solution for https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const size = nums.length;
    const prefixSum = new Array(size).fill(0);
    
    let ans = Number.MIN_SAFE_INTEGER, min = 0;
          
    for (let i = 0; i < size; i++) {
        prefixSum[i] = i == 0 ? nums[i] : prefixSum[i-1] + nums[i];
        ans = Math.max(ans, prefixSum[i] - min);
        min = Math.min(min, prefixSum[i]);
    }
    
    return ans;
};