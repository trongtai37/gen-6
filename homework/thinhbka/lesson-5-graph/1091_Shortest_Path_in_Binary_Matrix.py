# 1091. Shortest Path in Binary Matrix
neighbors  = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]

class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        if grid[0][0]!=0 or grid[n-1][n-1]!=0:return -1
        
        visited =[[False for _ in range(n)] for _ in range(n)]
        shortest_path = [[-1 for _ in range(n)] for _ in range(n)]
        
        shortest_path[0][0] = 1
        visited[0][0] = True
        frontier = [(0,0)]
        while frontier:
            next = []
            for (u,v) in frontier:
                for neighbor in neighbors:
                    r = u + neighbor[0]
                    c = v + neighbor[1]
                    if 0 <= r < n and 0<= c < n and visited[r][c] is False and grid[r][c]==0:
                        visited[r][c] = True
                        next.append((r,c))
                        shortest_path[r][c] = shortest_path[u][v]+1
                frontier = next
        return shortest_path[n-1][n-1]