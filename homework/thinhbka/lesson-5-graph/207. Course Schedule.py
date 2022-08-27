class Solution:
    def dfs(self,node):
        self.visited[node] = True
        self.is_visiting[node] = True
        for e in self.edges[node]:
            if self.visited[e] == False:
                self.dfs(e)
            else:
                if self.is_visiting[e] == True:
                    self.can_finish = False
                    
        self.is_visiting[node] = False
    
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        self.edges  =[[] for _ in range(numCourses)]
        self.can_finish = True
        for pair in prerequisites:
            self.edges[pair[0]].append(pair[1])
        self.visited = [False for _ in range(numCourses)]
        self.is_visiting = [False for _ in range(numCourses)]
        for i in range(numCourses):
            if self.visited[i] is False:
                self.dfs(i)
        return self.can_finish