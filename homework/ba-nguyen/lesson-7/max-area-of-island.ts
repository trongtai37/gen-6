function maxAreaOfIsland(grid: number[][]): number {
  const nr = grid.length;
  const nc = grid[0].length;
  let count = 0;
  let res = 0;

  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      count = 0;
      dfs(i, j);
      res = Math.max(res, count);
    }
  }

  function dfs(r: number, c: number) {
    if (!grid?.[r]?.[c]) return;

    grid[r][c] = 0;
    count++;

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }

  return res;
}
