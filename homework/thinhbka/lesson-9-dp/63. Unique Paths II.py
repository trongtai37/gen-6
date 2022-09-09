#Iterative

class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        rows = len(obstacleGrid)
        cols = len(obstacleGrid[0])
        if obstacleGrid[0][0] | obstacleGrid[-1][-1] == 1:
            return 0
        dp = [[0 for _ in range(cols)] for _ in range(rows)]
        dp[0][0] = 1
        for i in range(rows):
            for j in range(cols):
                if obstacleGrid[i][j] == 1:
                    dp[i][j] = 0
                    continue
                if i == 0:
                    dp[i][j] =dp[i][j-1]
                    continue
                if j == 0:
                    dp[i][j] = dp[i-1][j]
                    continue
                dp[i][j] = dp[i][j-1]+dp[i-1][j]
        return dp[-1][-1] 
#Recusion
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        rows = len(obstacleGrid)
        cols = len(obstacleGrid[0])
        if obstacleGrid[0][0] == 1 or obstacleGrid[-1][-1] == 1:
            return 0
        dp = [[-1 for _ in range(cols) ]for _ in range(rows)]
        def solve(m,n):
            if m == 0 and n == 0:
                dp[m][n] = 1
                return dp[m][n]
            if dp[m][n]!=-1:
                return dp[m][n]
            if obstacleGrid[m][n] == 1:
                dp[m][n] = 0
                return dp[m][n]
            if m == 0:
                dp[m][n] = solve(m,n-1)
                return dp[m][n]
            if n == 0:
                dp[m][n] = solve(m-1,n)
                return dp[m][n]
            dp[m][n] = solve(m-1,n)+solve(m,n-1)
            return dp[m][n]
        solve(rows-1,cols-1)
        return dp[-1][-1]