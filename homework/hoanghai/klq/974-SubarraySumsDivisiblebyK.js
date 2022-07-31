/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
    let min = nums[0]
    for (let i = 1; i < nums.length ; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    let additional = 0
    if (min < 0) {
        additional = (-min) * k
    }
    let newArr = []

    for (let number of nums) {
        newArr.push(number+additional)
    }
    let prefixSum = [newArr[0]]
    for (let i = 1 ; i < newArr.length; i++) {
        prefixSum[i] = prefixSum[i-1] + newArr[i]
    }
    let frequent = {'0': 1}
    let result = 0
    for (let item of prefixSum) {
        if(!(frequent[item % k])) {
            frequent[item % k] = 1
        }
        else {
            result += frequent[item%k]
            frequent[item%k] += 1
        }
    }
    return result
};