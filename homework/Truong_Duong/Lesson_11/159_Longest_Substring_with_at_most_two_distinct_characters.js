// Solution for https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let left = 0, right = 0, ans = 0;
  const N = s.length, countMap = {};

  let distinctCount = 1;
  countMap[s[0]] = 1;

  while (right < N) {
    if (distinctCount <= 2) {
      ans = Math.max(ans, right - left + 1);

      if (right + 1 < N) {
        right += 1;
        if (countMap[s[right]] >= 1) {
          countMap[s[right]] += 1;
        } else {
          countMap[s[right]] = 1;
          distinctCount += 1;
        }
      } else {
        break;
      }
    } else {
      countMap[s[left]] -= 1;
      if (countMap[s[left]] === 0) distinctCount -= 1;
      left += 1;
    }
  }

  return ans;
};
