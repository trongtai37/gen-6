
oo = int(1e8)

class Solution:
    def shortestAlternatingPaths(self, n: int, redEdges, blueEdges):
        distance = [[oo,oo] for _ in range(n)]
        visited = [[False,False] for _ in range(n)]
        graph = [[] for _ in range(n)]# [[(1,red),(1,blue)]]
        RED = 0
        for edge in redEdges:
            u = edge[0]
            v = edge[1]
            graph[u].append((v,RED))
        for edge in blueEdges:
            u = edge[0]
            v = edge[1]
            graph[u].append((v,1-RED))
        front = ((0,0),(0,1))
        distance[0][RED] = 0
        distance[0][1-RED] = 0 
        while front:
            next = []
            for node,color in front: 
                visited[node][color] = True
                for neighbor in graph[node]:
                    if neighbor[1]+color == 1 and visited[neighbor[0]][neighbor[1]] is False:
                        if distance[neighbor[0]][neighbor[1]] >=distance[node][color]+1:
                            distance[neighbor[0]][neighbor[1]] = distance[node][color]+1
                        next.append(neighbor)
            front = next
        ans = []
        for e in distance:
            min_val = min(e[0],e[1])
            if min_val == oo:
                ans.append(-1)
            else:ans.append(min_val)
        # print(ans)
        return ans


sol = Solution()
arr = [
5,
[[2,2],[0,1],[0,3],[0,0],[0,4],[2,1],[2,0],[1,4],[3,4]],
[[1,3],[0,0],[0,3],[4,2],[1,0]]
]
sol.shortestAlternatingPaths(n=arr[0],redEdges=arr[1],blueEdges=arr[2])