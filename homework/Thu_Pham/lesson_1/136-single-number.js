//Solution for https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res
};

//runtime O(n) with n is the length of the input array
//space O(1) extra space
