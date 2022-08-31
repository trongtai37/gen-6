from dis import dis

import heapq as h
class Solution:
    def maxProbability(self, n: int, edges, succProb, start, end) -> float:
        g= {}
        for i in range(n):
            g[i] = {}
        for e,pro in zip(edges,succProb):
            g[e[0]][e[1]]= pro
            g[e[1]][e[0]] = pro
        dist = [0]*n
        dist[start] = 1
        q = [(1,start)]
        while q:
            prePro,node = h.heappop(q)
            prePro=prePro*(-1)
            if dist[node]!=prePro:
                continue
            for u in g[node]:
                if dist[u] < dist[node]*g[node][u]:
                    dist[u] = dist[node]*g[node][u]
                    h.heappush((-dist[u],u))
        return dist[end]

