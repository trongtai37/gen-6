// Solution for https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const size = nums.length;
    const ans = new Array(size).fill(1);
    const prefixLeft = new Array(size).fill(1);
    const prefixRight = new Array(size).fill(1);

    for (let i = 1; i < size; i++) {
        prefixLeft[i] = prefixLeft[i - 1] * nums[i - 1]
    }
    for (let i = size - 2; i >= 0; i--) {
        prefixRight[i] = prefixRight[i + 1] * nums[ i + 1]
    }
    for (let i = 0; i < size; i++) {
        ans[i] = prefixLeft[i] * prefixRight[i];
    }

    return ans;
};