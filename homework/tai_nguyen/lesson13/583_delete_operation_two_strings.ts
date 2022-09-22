function minDistance(word1: string, word2: string): number {
  const m = word1.length,
    n = word2.length;

  const dp = new Array(m + 1).fill(true).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], dp[i][j - 1]);
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }
  }

  return m + n - 2 * dp[m][n];
}
