// Solution for https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let zeroCount = 0, products =  1, zeroIndex = -1;
    const ans = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === 0) {
            zeroCount += 1;
            zeroIndex = i;
        } else {
            products *= element;
        }
    }

    if (zeroCount >= 2) return ans;
    if (zeroCount === 1) {
        ans[zeroIndex] = products;
        return ans;
    }

    for(let i = 0; i < nums.length; i++) {
        ans[i] = products/nums[i];
    }
    return ans;
};