// Solution for https://leetcode.com/problems/shortest-path-to-get-food/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  const R = grid.length, C = grid[0].length;
  const visited = {};
  const dis = {};

  for (let i = 0; i < R; i++) {
    visited[i] = Array(C).fill(false);
    dis[i] = Array(C).fill(0);
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0]

  const isValid = (r, c) => r >= 0 && c >= 0 && r < R && c < C && grid[r][c] !== 'X';

  const BFS = (s) => {
    const queue = [];
    visited[s[0]][s[1]] = true;
    queue.push(s);

    while (queue.length > 0) {
      const [ux, uy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const vx = ux + dx[i];
        const vy = uy + dy[i];

        if (isValid(vx, vy) && visited[vx][vy] === false) {
          dis[vx][vy] = dis[ux][uy] + 1;
          if (grid[vx][vy] === '#') return dis[vx][vy];

          visited[vx][vy] = true;
          queue.push([vx, vy]);
        }
      }

    }
    return -1;
  }

  // Find starting index and start BFS
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] === '*') {
        return BFS([i, j]);
      }
    }
  }
};