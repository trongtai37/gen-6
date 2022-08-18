import heapq as h
#Method 1: Using Heap
#Complexity:Suppose that the size of matrix is M
#Time: -> O(M*logM)
#Space: O(M)
class Solution:
    def maximumMinimumPath(self, grid) -> int:
        rows = len(grid)
        cols = len(grid[0])
        q =[(-grid[0][0],(0,0))]
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        ans = 1e9+1
        visited = [[False for _ in range(cols)]for _ in range(rows)]
        visited[0][0] = True
        while q:
            value,(r,c) = h.heappop(q)
            ans = min(ans,-value)
            for (dir_x,dir_y) in dirs:
                x = r+dir_x
                y = c+dir_y
                if 0<=x<rows and 0<=y <cols and visited[x][y] is False:
                    visited[x][y] = True
                    h.heappush(q,(-grid[x][y],(x,y)))
                    if (x,y) == (rows-1,cols-1):
                        return min(ans,grid[x][y])

#Method 2: Using Union-Find
#Complexity:Suppose that the size of matrix is M
#Time: -> O(M*logM)
#Space: O(M)
def find(u,parent):
    if u!=parent[u]:
        parent[u] = find(parent[u],parent)
    return parent[u]
def union(u,v,parent,ranks):
    up = find(u,parent)
    vp = find(v,parent)
    if up==vp:return
    if ranks[up] > ranks[vp]:
        parent[vp] = up
    elif ranks[up] < ranks[vp]:
        parent[up] = vp
    else:
        parent[up] = vp
        ranks[vp]+=1  
class Solution:
    def maximumMinimumPath(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        vertices  = [(r,c) for r in range(len(grid)) for c in range(len(grid[0]))]
        vertices.sort(key=lambda x:grid[x[0]][x[1]],reverse=True)
        parent = list(range(rows*cols))
        ranks = [0 ]*(rows*cols)
        ans = vertices[0][0]
        visited = [False for _ in range(rows*cols)]
        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        for cur_row,cur_col in vertices:
            cur_pos = cur_row*cols + cur_col
            visited[cur_pos] = True
            for direct in dirs:
                row = cur_row+direct[0]
                col = cur_col+direct[1]
                pos = row*cols + col
                if 0<=row<rows and 0<=col<cols and visited[row*cols+col] is True:
                    union(cur_pos,pos,parent,ranks)
                if find(0,parent) == find(cols*rows-1,parent):
                    return grid[cur_row][cur_col]
                

#Method3: Using BFS(DFS) + Binary Search
#Complexity:Suppose that the size of matrix is M and max element in matrix in N
#Time: -> O(M*logN)
#Space: O(M)
DIR = [(0,1),(0,-1),(1,0),(-1,0)]

def canDfs(value,node,grid,visited):
    visited[node[0]][node[1]] = True
    if node == (len(grid)-1,len(grid[0])-1):
        return True
    for dir_ in DIR:
        x = dir_[0]+ node[0]
        y = dir_[1]+ node[1]
        if 0<=x<len(grid) and 0<=y<len(grid[0]) and visited[x][y] is False and grid[x][y]>=value:
            if canDfs(value,(x,y),grid,visited):
                return True
    return False
                                            
                                                                             
        
class Solution:
    def maximumMinimumPath(self, grid: List[List[int]]) -> int:
        l,r = 0,0
        rows = len(grid)
        cols = len(grid[0])
        for row in grid:
            l = min(l,min(row))
            r = max(r,max(row))
        ans = l
        while l <= r:
            m = (l+r)>>1
            visited = [[ False for _ in  range(cols) ] for _ in range(rows)]
            if grid[0][0] >=m and canDfs(m,(0,0),grid,visited):
                ans = m
                l = m+1
            else:
                r = m-1
        return  ans