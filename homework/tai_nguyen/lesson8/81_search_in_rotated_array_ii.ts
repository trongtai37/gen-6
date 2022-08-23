/**
 * Observation: after rotating a sorted array, what we get is two sorted arrays appended to each other.
 * named first sorted array as F and second as S.
 * we can observe that all the elements of the second array S will be smaller
 * or equal to the first element start of F.
 *
 * There will be 4 cases:
 * Case 1: nums[mid] lies in F, target lies in S
 * Case 2: nums[mid] lies in the S, target lies in F
 * Case 3: Both nums[mid] and target lie in F
 * Case 4: Both nums[mid] and target lie in S
 *
 * Exception: if nums[mid] equals nums[start], then we know that nums[mid] might belong to both F and S
 * and hence we cannot find the relative position of target from it
 */

function search(nums: number[], target: number): boolean {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (target === nums[mid]) {
      return true;
    }

    if (nums[l] === nums[mid]) {
      l++;
      continue;
    }

    const midInFirst = nums[mid] >= nums[l];
    const targetInFirst = target >= nums[l];

    if ((midInFirst || targetInFirst) && midInFirst !== targetInFirst) {
      if (midInFirst) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return false;
}
