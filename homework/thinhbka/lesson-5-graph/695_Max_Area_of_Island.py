# https://leetcode.com/problems/max-area-of-island/


DIR = [(0,1),(0,-1),(-1,0),(1,0)]
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ans = 0
        rows = len(grid)
        cols = len(grid[0])
        visited = [[False for _ in range(cols)] for _ in range(rows)]
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    frontier = [(i,j)]
                    cnt = 0
                    visited[i][j] = True
                    while frontier:
                        next = []
                        for (r,c) in frontier:
                            cnt+=1
                            for cur in DIR:
                                n_r = r+cur[0]
                                n_c = c+cur[1]
                                if 0<=n_r<rows and 0<=n_c < cols and visited[n_r][n_c] is False and grid[n_r][n_c]==1:
                                    visited[n_r][n_c] = True
                                    next.append((n_r,n_c))
                        frontier = next
                    ans = max(ans,cnt)
        return ans