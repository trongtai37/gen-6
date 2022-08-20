function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  let l = 0;
  let r = 0;
  let res = 0;
  const hashMap: { [key: string]: number } = {};
  let distinct = 0;

  while (r < s.length) {
    const charR = s[r];
    hashMap[charR] = hashMap[charR] === undefined ? 1 : hashMap[charR] + 1;

    if (hashMap[charR] === 1) distinct++;

    while (distinct > k) {
      const charL = s[l];
      hashMap[charL]--;
      l++;
      if (hashMap[charL] < 1) distinct--;
    }

    res = Math.max(res, r - l + 1);
    r++;
  }

  return res;
}
