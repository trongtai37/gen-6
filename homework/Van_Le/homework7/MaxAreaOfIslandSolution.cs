namespace running_app
{
    public class MaxAreaOfIslandSolution
    {
        private int[][] grid;
        private bool[,] visited;

        public int MaxAreaOfIsland(int[][] grid)
        {
            this.grid = grid;
            visited = new bool[grid.Length, grid[0].Length];
            int ans = 0;
            for (int r = 0; r < grid.Length; r++)
            {
                for (int c = 0; c < grid[0].Length; c++)
                {
                    ans = Math.Max(ans, AreaDfs(r, c));
                }
            }
            return ans;
        }

        private int AreaDfs(int r, int c)
        {
            // if the current position is not an island (grid[r][c] == 0) or the position is outbound or the current position used to be visited before
            // then you can say it has zero area -> return 0
            if (r < 0
               || r >= grid.Length
               || c < 0
               || c >= grid[0].Length
               || visited[r, c]
               || grid[r][c] == 0)
                return 0;

            // if the current position is an island -> mark it as visited and use Dfs to find another island
            visited[r, c] = true;
            return (1 + AreaDfs(r + 1, c) + AreaDfs(r - 1, c) + AreaDfs(r, c + 1) + AreaDfs(r, c - 1));
        }
    }
}

// time complexity: O(m * n) m is the row length of grid and n is the collumn length of grid
// space complexity: O(m * n) because we have to use visited 2d array to store the visited position