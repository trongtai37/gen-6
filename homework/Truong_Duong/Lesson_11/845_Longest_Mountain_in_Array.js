// Solution for https://leetcode.com/problems/longest-mountain-in-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const N = arr.length;
  let ans = 0;
  let i = 0;

  while (i < N) {
    const base = i;

    while (i + 1 < N && arr[i] < arr[i + 1]) i += 1;
    if (i == base) {
      i += 1;
      continue;
    }

    const peak = i;
    while (i + 1 < N && arr[i] > arr[i + 1]) i += 1;
    if (i == peak) {
      i += 1;
      continue;
    }

    ans = Math.max(ans, i - base + 1)
  }

  return ans;
};

console.log(longestMountain([0, 2, 0, 2, 1, 2, 3, 4, 4, 1]))