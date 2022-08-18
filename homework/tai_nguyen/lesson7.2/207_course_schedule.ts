function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const edges: number[][] = new Array(numCourses).fill(true).map(() => []);
  prerequisites.forEach(([j, i]) => {
    edges[i].push(j);
  });

  const visited = new Array(numCourses).fill(false);
  const isOnStack = new Array(numCourses).fill(false);

  function dfs(i: number) {
    visited[i] = true;
    isOnStack[i] = true;

    for (const j of edges[i]) {
      if (isOnStack[j]) return false;
      if (!visited[j]) {
        const flag = dfs(j);
        if (!flag) return false;
      }
    }

    isOnStack[i] = false;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i] && !dfs(i)) {
      return false;
    }
  }

  return true;
}
