// Solution for https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = [];
  const visited = Array(numCourses).fill(false);
  const currentPath = Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) graph[i] = [];

  for (const pre of prerequisites) {
    graph[pre[1]].push(pre[0]);
  }

  const dfs = (s) => {
    visited[s] = true;
    currentPath[s] = true;

    for (const course of graph[s]) {
      if (currentPath[course]) return true;

      if (!visited[course]) {
        if (dfs(course)) return true;
      }
    }

    currentPath[s] = false;
    return false;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!visited[course]) {
      if (dfs(course)) return false;
    }
  }
  return true;
};