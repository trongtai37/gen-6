/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 184 ms, faster than 5.02% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 56.4 MB, less than 5.10% of JavaScript online submissions for Maximum Subarray.
var getMaximum = function (a , b , c ) {
    let result = a
    if (b > result) {
        result = b
    }
    if (c > result) {
        result = c
    }
    return result
}
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let maxInArr = nums[0]
    let prefixSum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
        if (nums[i] > maxInArr) {
            maxInArr = nums[i]
        }
    }
    let min = prefixSum[0]
    let max = prefixSum[0]
    let maxResult = min
    for (let i = 1; i < prefixSum.length; i++) {
        if ((prefixSum[i] - min) > maxResult) {
            maxResult = (prefixSum[i] - min)
        }
        if (prefixSum[i] < min) {
            min = prefixSum[i]
        }
        if (prefixSum[i] > max) {
            max = prefixSum[i]
        }
    }
    return getMaximum(maxResult, max, maxInArr)
};