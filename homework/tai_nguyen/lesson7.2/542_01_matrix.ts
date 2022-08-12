const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function isInsideGrid(grid: number[][], i: number, j: number) {
  const m = grid.length;
  const n = grid[0].length;

  return i >= 0 && i < m && j >= 0 && j < n;
}

function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  const distance = new Array(m)
    .fill(true)
    .map(() => new Array(n).fill(Infinity));

  const queue: [number, number][] = [];
  mat.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 0) {
        queue.push([i, j]);
        distance[i][j] = 0;
      }
    });
  });

  while (queue.length) {
    const [row, col] = queue.shift()!;
    for (let k = 0; k < 4; k++) {
      const i = row + dr[k];
      const j = col + dc[k];

      if (isInsideGrid(mat, i, j) && distance[i][j] > distance[row][col] + 1) {
        distance[i][j] = distance[row][col] + 1;
        queue.push([i, j]);
      }
    }
  }

  return distance;
}
