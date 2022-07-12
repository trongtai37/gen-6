//Solution for https://leetcode.com/problems/single-number/

/*
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const tmpArray = []
    for(let i = 0; i < nums.length; i++) {
        const index = tmpArray.findIndex((item) => item === nums[i])
        if(index !== -1) {
            tmpArray.splice(index, 1)
        } else {
            tmpArray.push(nums[i])
        }
    }
    return tmpArray[0]
};