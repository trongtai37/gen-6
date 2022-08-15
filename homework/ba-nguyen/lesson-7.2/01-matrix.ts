function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const queue: number[][] = [];
  const visited: { [key: string]: boolean } = {};
  const dr: number[] = [1, -1, 0, 0];
  const dc: number[] = [0, 0, -1, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        visited[`${i},${j}`] = true;
      }
    }
  }

  let step = 1;
  while (!!queue.length) {
    const size = queue.length;

    for (let k = 0; k < size; k++) {
      const [cellRow, cellCol] = queue.shift() as number[];

      for (let i = 0; i < 4; i++) {
        const r = cellRow + dr[i];
        const c = cellCol + dc[i];

        if (0 <= r && r < m && 0 <= c && c < n && !visited[`${r},${c}`]) {
          mat[r][c] = step;
          queue.push([r, c]);
          visited[`${r},${c}`] = true;
        }
      }
    }

    step++;
  }

  return mat;
}
