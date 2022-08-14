namespace running_app
{
    public class TheMazeII
    {
        public int ShortestDistance(int[][] maze, int[] start, int[] destination)
        {
            var distances = new int[maze.Length][];
            for (int i = 0; i < distances.Length; i++)
                distances[i] = Enumerable.Repeat(int.MaxValue, maze[0].Length).ToArray();
            distances[start[0]][start[1]] = 0;
            var q = new Queue<(int rr, int cc)>();
            q.Enqueue((start[0], start[1]));
            var dir = new (int rInc, int cInc)[] { (1, 0), (0, -1), (0, 1), (-1, 0) };
            while (q.Count > 0)
            {
                var tup = q.Dequeue();
                int r = tup.rr, c = tup.cc;

                for (int i = 0; i < 4; i++)
                {
                    int newR = r + dir[i].rInc, newC = c + dir[i].cInc, count = 0;
                    while (newR >= 0 && newR < maze.Length && newC >= 0 && newC < maze[0].Length && maze[newR][newC] == 0)
                    {
                        newR += dir[i].rInc; newC += dir[i].cInc;
                        count++;
                    }
                    newR -= dir[i].rInc; newC -= dir[i].cInc;
                    var newDist = distances[r][c] + count;
                    if (distances[newR][newC] > newDist)
                    {
                        distances[newR][newC] = newDist;
                        q.Enqueue((newR, newC));
                    }
                }
            }
            return distances[destination[0]][destination[1]] == int.MaxValue ? -1 : distances[destination[0]][destination[1]];
        }
    }
}
