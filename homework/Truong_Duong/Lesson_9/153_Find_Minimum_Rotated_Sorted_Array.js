// Solution for https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// var findMin = function(nums) {
//     let left = 0, right = nums.length - 1;

//     if(nums[left] < nums[right]) return nums[left];

//     let ans;
//     while (right >= left) {
//       const mid = left + Math.floor((right - left) / 2);

//       if(nums[mid] > nums[left]) {
//         left = mid + 1;
//       } else {
//         ans = nums[mid];
//         right = mid - 1;
//       }
//     }

//     return ans;
// };