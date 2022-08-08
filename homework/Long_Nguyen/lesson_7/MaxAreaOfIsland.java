import java.util.ArrayDeque;
import java.util.Deque;

// https://leetcode.com/problems/max-area-of-island
public class MaxAreaOfIsland {
    public int maxAreaOfIsland(int[][] grid) {
        int ans = 0;

        boolean[][] visited = new boolean[grid.length][grid[0].length];
        int[] dx = new int[]{1, -1, 0, 0};
        int[] dy = new int[]{0, 0, 1, -1};

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (!visited[i][j] && grid[i][j] == 1) {
                    int currentAns = 0;
                    Deque<int[]> stack = new ArrayDeque<>();
                    stack.offerFirst(new int[]{i, j});
                    visited[i][j] = true;

                    while (!stack.isEmpty()) {
                        int[] node = stack.pollFirst();
                        int ii = node[0];
                        int jj = node[1];
                        currentAns++;

                        for (int k = 0; k < 4; k++) {
                            int iii = ii + dx[k];
                            int jjj = jj + dy[k];
                            if (iii < 0 || iii > grid.length - 1 || jjj < 0 || jjj > grid[0].length - 1 || visited[iii][jjj] || grid[iii][jjj] != 1)
                                continue;

                            stack.offerFirst(new int[]{iii, jjj});
                            visited[iii][jjj] = true;
                        }
                    }

                    ans = Math.max(ans, currentAns);
                }
            }
        }

        return ans;
    }
}
