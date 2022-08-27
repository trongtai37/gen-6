# https://leetcode.com/problems/01-matrix/



#DP approach 
#Time: O(mxn)
#Space: O(mxn)
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        rows = len(mat)
        cols = len(mat[0])
        ans = [[int(1e5) for _ in range(cols)] for _ in range(rows)]
        for r in range(rows):
            for c in range(cols):
                if mat[r][c] == 0:
                    ans[r][c] = 0
                else:
                    if r >0:
                        ans[r][c] = min(ans[r][c], ans[r-1][c]+1)
                    if c >0 :
                        ans[r][c] = min(ans[r][c], ans[r][c-1]+1)

        for r in range(rows-1,-1,-1):
            for c in range(cols-1,-1,-1):
                if r <rows-1:
                    ans[r][c] = min(ans[r][c],ans[r+1][c]+1)
                if c < cols-1:
                    ans[r][c] = min(ans[r][c],ans[r][c+1]+1)
        return ans

#BFS
# Time & Space: O(mxn)
DIR = [(0,-1),(0,1),(-1,0),(1,0)]
MAX = int(1e5)
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        frontier = []
        rows = len(mat)
        cols = len(mat[0])
        dist = [[MAX for _ in range(cols)] for _ in range(rows)]
        for i in range(rows):
            for j in range(rows):
                if mat[i][j] == 0:
                    frontier.append((i,j))
                    dist[i][j] = 0
        
        while frontier:
            next = []
            for (r,c) in frontier:
                for dir_ in DIR:
                    new_r = dir_[0]+r
                    new_c = dir_[1]+c
                    if 0<=new_r<rows and 0<=new_c<cols:
                        if dist[new_r][new_c]>dist[r][c]+1:
                            dist[new_r][new_c]=dist[r][c]+1
                            next.append((new_r,new_c))
            frontier = next
        return dist
        
arr = [ [1,0,1,1,0,0,1,0,0,1],
        [0,1,1,0,1,0,1,0,1,1],
        [0,0,1,0,1,0,0,1,0,0],
        [1,0,1,0,1,1,1,1,1,1],
        [0,1,0,1,1,0,0,0,0,1],
        [0,0,1,0,1,1,1,0,1,0],
        [0,1,0,1,0,1,0,0,1,1],
        [1,0,0,0,1,1,1,1,0,1],
        [1,1,1,1,1,1,1,0,1,0],
        [1,1,1,1,0,1,0,0,1,1]
    ]
Solution().updateMatrix(arr)