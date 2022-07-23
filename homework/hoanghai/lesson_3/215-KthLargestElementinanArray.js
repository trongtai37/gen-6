/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Solution 1: bucket
// var findKthLargest = function(nums, k) {
//     let countSortArr = {}
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         if (!countSortArr[nums[i]]) {
//             countSortArr[nums[i]] = 1
//         }
//         else {
//             countSortArr[nums[i]] += 1
//         }
//     }
//     let listKey = Object.getOwnPropertyNames(countSortArr).sort(function(a, b){return parseInt(a) - parseInt(b)})
//     for(number of listKey) {
//         while (countSortArr[number] > 0) {
//             result.push(number);
//             countSortArr[number]--;
//         }
//     }
//     return result[result.length-k]
// };

// solution 2: i submit it before, just sort it first and it's faster
var findKthLargest = function(nums, k) {
    let newNums = nums.sort(function(a,b){
        return a-b;
    });
    return newNums[newNums.length-k];
};

//solution 3: sort by pivot sort