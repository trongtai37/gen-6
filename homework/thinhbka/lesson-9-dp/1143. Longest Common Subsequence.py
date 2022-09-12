
#Tabulation
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n = len(text1)
        m = len(text2)
        dp = [[0 for _ in range(m+1)] for _ in range(n+1)]
        for i in range(1,n+1):
            for j in range(1,m+1):
                if text1[i-1] == text2[j-1]:
                    dp[i][j] = dp[i-1][j-1]+1
                else:
                    dp[i][j] = max(dp[i-1][j],dp[i][j-1])
        return dp[n][m]


#Recursion
class Solution:
    def longestCommonSubsequence(self, s1: str, s2: str) -> int:
        n = len(s1)
        m = len(s2)
        dp = [[-1 for _ in range(m+1)] for _ in range(n+1)]
        def LCS(s1,s2,n,m):
            if m==0 or n==0:
                dp[n][m] = 0
                return 0
            if dp[n][m]!=-1:
                return dp[n][m]
            if s1[n-1] == s2[m-1]:
                dp[n][m] = 1 + LCS(s1,s2,n-1,m-1)
                return dp[n][m]
            dp[n][m] = max(LCS(s1,s2,n-1,m),LCS(s1,s2,n,m-1))
            return dp[n][m]
        return LCS(s1,s2,n,m)