/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let result = nums[0]
    for (let i = 1; i < nums.length; i++) {
        result = result ^ nums[i]
    }
    return result
};
// tinh chat dac biet cua phep xor ma toi tung duoc hoc.