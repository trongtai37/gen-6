// Solution for https://leetcode.com/problems/4sum/
// IN_PROGRESS

// const twoSum = (nums, i, j,hashMap, target, ans) => {
//     for (let k = 0; k < nums.length; k++) {
//         if(k === i || k === j) continue;
//         const remaining = target - nums[k];
//         if(remaining in hashMap) {

//         }
//     }
// }

// var fourSum = function (nums, target) {
//     const hashMap = {}; // key: nums[i], value: frequency
//     const ans = [];

//     for (let num of nums) {
//         if (num in hashMap) hashMap[num] += 1;
//         else hashMap[num] = 1;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) continue;
//             hashMap[nums[i]] -= 1;
//             hashMap[nums[j]] -= 1;
//             const nextTarget = target - nums[i] - nums[j];
//             twoSum(nums, i, j, hashMap, nextTarget, ans);
//             hashMap[nums[i]] += 1;
//             hashMap[nums[j]] += 1;
//         }
//     }

//     return ans;
// };