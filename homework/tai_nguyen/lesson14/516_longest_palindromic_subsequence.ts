function longestPalindromeSubseq(s: string): number {
  const n = s.length;
  const cache = new Array(n).fill(true).map(() => new Array(n).fill(0));

  function dp(i: number, j: number) {
    if (cache[i][j] > 0) {
      return cache[i][j];
    }

    if (i === j) {
      cache[i][j] = 1;
    } else if (i + 1 === j) {
      cache[i][j] = s.charAt(i) === s.charAt(j) ? 2 : 1;
    } else {
      cache[i][j] =
        s.charAt(i) === s.charAt(j)
          ? dp(i + 1, j - 1) + 2
          : Math.max(dp(i + 1, j), dp(i, j - 1));
    }

    return cache[i][j];
  }

  return dp(0, n - 1);
}
