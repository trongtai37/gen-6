DIR = [(0,-1),(0,1),(1,0),(-1,0)]
class Solution:
    def getFood(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        visited = [[False for _ in range(cols)] for _ in range(rows)]
        step = [[0 for _ in range(cols)] for _ in range(rows)]
        has_found_star = False
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "*" and has_found_star is False:
                    has_found_star = True
                    visited[i][j] = True
                    frontier = [(i,j)]
                    while frontier:
                        next = []
                        for (row,col) in frontier:
                            for (m,n) in DIR:
                                n_r = row+m
                                n_c = col+n
                                if 0<=n_r<rows and 0<=n_c<cols and grid[n_r][n_c] != "X" and visited[n_r][n_c] is False:
                                    step[n_r][n_c] = step[row][col]+1
                                    visited[n_r][n_c] = True
                                    if grid[n_r][n_c] =="#":
                                        return step[n_r][n_c]
                                    next.append((n_r,n_c))
                        frontier = next
        return -1