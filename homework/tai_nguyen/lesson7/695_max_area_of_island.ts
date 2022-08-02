/**
 *
 * @link https://leetcode.com/problems/max-area-of-island/
 */

function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0,
    res = 0;

  function isInsideGrid(i: number, j: number) {
    return i >= 0 && i < m && j >= 0 && j < n;
  }

  function dfs(row: number, col: number) {
    count++;
    grid[row][col] = 0;

    const dr = [-1, 0, 1, 0];
    const dc = [0, -1, 0, 1];

    for (let k = 0; k < 4; k++) {
      const i = row + dr[k];
      const j = col + dc[k];

      if (isInsideGrid(i, j) && grid[i][j]) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count = 0;
        dfs(i, j);
        res = Math.max(res, count);
      }
    }
  }

  return res;
}
