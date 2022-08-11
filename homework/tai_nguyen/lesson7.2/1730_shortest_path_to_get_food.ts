const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function isInsideGrid(grid: string[][], i: number, j: number) {
  const m = grid.length;
  const n = grid[0].length;

  return i >= 0 && i < m && j >= 0 && j < n;
}

function getFood(grid: string[][]): number {
  function bfs(row: number, col: number) {
    const queue: [number, number, number][] = [[row, col, 0]];

    while (queue.length) {
      const [i, j, level] = queue.shift()!;

      for (let k = 0; k < 4; k++) {
        const x = i + dr[k];
        const y = j + dc[k];

        if (isInsideGrid(grid, x, y) && grid[x][y] !== 'X') {
          if (grid[x][y] === '#') {
            return level + 1;
          }

          grid[x][y] = 'X'; // marked as visited
          queue.push([x, y, level + 1]);
        }
      }
    }

    return -1;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '*') {
        grid[i][j] = 'X'; // marked as visited
        return bfs(i, j);
      }
    }
  }

  return -1;
}
