// Solution for https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const R = grid.length, C = grid[0].length;
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    const visited = {};
    for (let i = 0; i < R; i++) {
        visited[i] = new Array(C).fill(false);
    }

    const isValid = (r, c) => (r >= 0 && r < R && c >= 0 && c < C && grid[r][c] === 1);

    const dfs = (sr, sc) => {
        visited[sr][sc] = true;
        count += 1;

        for (let i = 0; i < 4; i++) {
            const vr = sr + dx[i];
            const vc = sc + dy[i];

            if (isValid(vr, vc) && !visited[vr][vc]) {
                dfs(vr, vc);
            }
        }
    }


    let ans = 0;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                var count = 0;
                dfs(i, j);
                ans = Math.max(ans, count);
            }
        }
    }
    return ans;
};
