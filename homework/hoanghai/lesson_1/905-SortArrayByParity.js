/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let end = nums.length - 1
    let start = 0
    while (start < end) {
        if (nums[start] % 2 === 1) {
            let temp = nums[end]
            nums[end] = nums[start]
            nums[start] = temp
            end -= 1
        }
        else {
            start += 1
        }
    }
    return nums
};