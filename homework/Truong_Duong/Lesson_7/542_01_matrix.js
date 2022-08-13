// Solution for https://leetcode.com/problems/01-matrix/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function (mat) {
  const R = mat.length, C = mat[0].length;
  const queue = [];
  let visited = [], dist = [];

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // Init values
  for (let i = 0; i < R; i++) {
    visited[i] = Array(C).fill(false);
    dist[i] = Array(C).fill(0);
  }

  // Push the postion of all 0s into queue
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  const isValid = (x, y) => (x >= 0 && x < R && y >= 0 && y < C);

  let level = 0;
  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const [ux, uy] = queue.shift();
      if(mat[ux][uy] === 1) dist[ux][uy] = level;

      for (let j = 0; j < 4; j++) {
        const vx = ux + dx[j];
        const vy = uy + dy[j];

        if (isValid(vx, vy) && !visited[vx][vy]) {
          queue.push([vx, vy]);
          visited[vx][vy] = true;
        }
      }
    }

    level += 1;
  }

  return dist;
};