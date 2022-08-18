
from dis import dis
import heapq as h
oo = int(1e8)
DIR = [(0,-1),(0,1),(1,0),(-1,0)]
def in_maze(x,y,m,n):
    return 0 <= x < m and 0 <= y < n
def move_to_the_wall(dir,x,y,distance,maze,dis):
    cur   = 0
    next_x = x 
    next_y = y
    while True:
        
        if in_maze(next_x,next_y,len(distance),len(distance[0])) and maze[next_x][next_y]==0 :
            cur +=1
            next_x+=dir[0]
            next_y+=dir[1]
        else:
            if distance[next_x-dir[0]][next_y-dir[1]] > dis+cur-1:
                distance[next_x-dir[0]][next_y-dir[1]] = dis+cur-1
                return (next_x-dir[0],next_y-dir[1])
            else:
                return (-1,-1)
    
    # return 
        

#Method 1: BFS+heapq
class Solution:
    def shortestDistance(self, maze, start, destination):
        if maze[destination[0]][destination[1]]==1 or maze[start[0]][start[1]]==1 :
            return -1
        m = len(maze)
        n = len(maze[0])
        distance = [[oo for _ in range(n)]for _ in range(m)]
        distance[start[0]][start[1]] = 0
        q = [(0,start)]
        while q:
            dis,node = h.heappop(q)
            if distance[node[0]][node[1]]!=dis:
                continue
            for dir in DIR:
                x,y = move_to_the_wall(dir,node[0],node[1],distance,maze,dis)
                if (x,y)!=(-1,-1):
                    h.heappush(q,(distance[x][y],(x,y)))
        if distance[destination[0]][destination[1]] !=oo:
            return distance[destination[0]][destination[1]]
        return -1



#Method 1: BFS only
class Solution:
    def shortestDistance(self, maze, start, destination):
        if maze[destination[0]][destination[1]]==1 or maze[start[0]][start[1]]==1 :
            return -1
        m = len(maze)
        n = len(maze[0])
        distance = [[oo for _ in range(n)]for _ in range(m)]
        distance[start[0]][start[1]] = 0
        q = [(0,start)]
        while q:
            next = []
            for dis,node in q:
                if distance[node[0]][node[1]]!=dis:
                    continue
                for dir in DIR:
                    x,y = move_to_the_wall(dir,node[0],node[1],distance,maze,dis)
                    if (x,y)!=(-1,-1):
                        next.append((distance[x][y],(x,y)))
            q = next
        if distance[destination[0]][destination[1]] !=oo:
            return distance[destination[0]][destination[1]]
        return -1