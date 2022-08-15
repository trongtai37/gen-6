function getFood(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  let step = 0;
  const queue: number[][] = [];
  const visited: boolean[][] = Array.from(Array(rows), () =>
    Array(cols).fill(false)
  );
  const dr: number[] = [1, -1, 0, 0];
  const dc: number[] = [0, 0, 1, -1];
  let cellRow = 0;
  let cellCol = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "*") {
        visited[i][j] = true;
        queue.push([i, j]);
        break;
      }
    }
  }

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const cell = queue.shift() as number[];
      cellRow = cell[0];
      cellCol = cell[1];

      if (grid[cellRow][cellCol] === "#") return step;
      for (let j = 0; j < 4; j++) {
        const r = cellRow + dr[j];
        const c = cellCol + dc[j];

        if (
          r >= 0 &&
          r < rows &&
          c >= 0 &&
          c < cols &&
          grid[r][c] !== "X" &&
          !visited[r][c]
        ) {
          visited[r][c] = true;
          queue.push([r, c]);
        }
      }
    }

    step++;
  }

  return grid[cellRow][cellCol] === "#" ? step : -1;
}
