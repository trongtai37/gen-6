edges = []
edges.append(["a","b"])
edges.append(["b","c"])
edges.append(["a","d"])
edges.append(["d","c"])
CNT = 1
def kosaraju(edges):
    Adj = {}
    reAdj = {}
    for edge in edges:
        u = edge[0]
        v = edge[1]
        if u not in Adj:
            Adj[u] =[]
        if v not in Adj:
            Adj[v] = []
        if v not in reAdj:
            reAdj[v] = []
        if u not in reAdj:
            reAdj[u] = []

        Adj[u].append(v)
        reAdj[v].append(u)

    def dfs(node,Adj,visited,stack):
        visited[node] = True
        for v in Adj[node]:
            if v not in visited:
                dfs(v,Adj,visited,stack)
        stack.append(node)
    visited = {}
    stack = []
    for node in Adj:
        if node not in visited:
            dfs(node,Adj,visited,stack)

    visited = {}
    while stack:
        node = stack.pop()
        if node not in visited:
            com = []
            dfs(node,reAdj,visited,com)
            print("Strongly component: ",list(reversed(com)))
timer = 1
def tajan_method(edges):
    graph = [[] for _ in range(26)]
    for e in edges:
        u = ord(e[0])-ord("a")
        v = ord(e[1])-ord("a")
        graph[u].append(v)
    num = [0]*26
    low = [0]*26
    def tanjan(u,stack = [],deleted = {}):
        global timer
        timer +=1
        low[u] = timer
        num[u] = timer
        stack.append(u)
        for v in graph[u]:
            if num[v]!=0:
                low[u] = min(low[u],num[v])
            else:
                tanjan(v,stack,deleted)
                low[u] = min(low[u],low[v])
        if low[u] == num[u]:
            node = -1
            print("SCC!")
            while node!=u:
                node= stack.pop()
                num[node] = num[u] =CNT 
                print(chr(ord("a")+node),end=" ")
                # deleted[node] = True
    for vertex in range(len(graph)):
        if num[vertex] == 0:
            tanjan(vertex,[])
    print(num)
    print(low)
kosaraju(edges)
# tajan_method(edges)