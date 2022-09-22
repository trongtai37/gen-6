function getValue(grid: number[][], i: number, j: number) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
    return Infinity;
  }

  return grid[i][j];
}

function minPathSum(grid: number[][]): number {
  let i: number, j: number;

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (i === 0 && j === 0) continue;

      grid[i][j] += Math.min(
        getValue(grid, i - 1, j),
        getValue(grid, i, j - 1)
      );
    }
  }

  // @ts-ignore
  return grid[i - 1][j - 1];
}
