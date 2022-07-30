/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysDivByK = function(nums, k) {
    // convert arr to non negative arr
    let min = nums[0]
    let frequent = {}
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
    // calculate prefix-sum-modulo frequentcy 
    for (let number of nums) {
        newArr.push(number+additional)
    }
    let prefixSum = [newArr[0]]
    for (let i = 1 ; i < newArr.length; i++) {
        prefixSum[i] = prefixSum[i-1] + newArr[i]
    }
    for (let item of prefixSum) {
        if(!(frequent[item % k])) {
            frequent[item % k] = 1
        }
        else {
            frequent[item%k] += 1
        }
    }
    // combination of n things 2 + special case: mod === 0
    let result = 0
    for (var key in frequent) {
        if (parseInt(key) === 0) {
            result += (frequent[key])
            if (frequent[key] >= 2) {
                let n = parseInt(frequent[key])
                result += (n*(n-1)/2)
            }
        }
        else if (frequent[key] >= 2) {
            let n = parseInt(frequent[key])
            result += (n*(n-1)/2)
        }
    }
    return result
};