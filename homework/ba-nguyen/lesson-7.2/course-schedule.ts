function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adjacency: { [key: string]: number[] } = {};
  const arr: number[] = Array.from(Array(numCourses).fill(0));
  const queue: number[] = [];

  for (const nums of prerequisites) {
    if (adjacency[nums[1]] === undefined) {
      adjacency[nums[1]] = [];
    }
    adjacency[nums[1]].push(nums[0]);
    arr[nums[0]]++;
  }

  for (let i = 0; i < numCourses; i++) {
    if (arr[i] === 0) {
      queue.push(i);
      arr[i] = -1;
    }
  }

  let completed = 0;
  while (!!queue.length) {
    const num = queue.shift() as number;
    completed++;

    if (adjacency[num]) {
      for (const next of adjacency[num]) {
        arr[next]--;
        if (arr[next] === 0) {
          queue.push(next);
        }
      }
    }
  }

  return completed === numCourses;
}
