/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Runtime: 125 ms, faster than 40.60% of JavaScript online submissions for K-diff Pairs in an Array.
// Memory Usage: 47.3 MB, less than 26.92% of JavaScript online submissions for K-diff Pairs in an Array.
var findPairs = function(nums, k) {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]]){
            hashMap[nums[i]] += 1
        }
        else {
            hashMap[nums[i]] = 1
        }
    }
    let result = 0
    if (k === 0) {
        for (key of Object.keys(hashMap)) {
            if (hashMap[parseInt(key)+k]>1) {
                result += 1
            }
        }
    }
    else {
        for (key of Object.keys(hashMap)) {
            if (hashMap[parseInt(key)+k]) {
                result += 1
            }
        }
    }

    return result
};
