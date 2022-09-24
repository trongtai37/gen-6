function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length,
    n = text2.length;

  if (m * n === 0) {
    return 0;
  }

  const dp = new Array(m + 1).fill(true).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], dp[i][j - 1]);
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }
  }

  return dp[m][n];
}
