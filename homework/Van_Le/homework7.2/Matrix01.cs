public class Matrix01
{
    public int[][] UpdateMatrix(int[][] mat)
    {
        int rowSize = mat.Length;
        int colSize = mat[0].Length;

        if (rowSize == 0) return mat;

        Queue<(int r, int c)> queue = new Queue<(int r, int c)>();
        var distance = new int[rowSize][];
        for (int i = 0; i < rowSize; i++)
        {
            distance[i] = new int[colSize];
        }

        for (int i = 0; i < rowSize; i++)
        {
            for (int j = 0; j < colSize; j++)
            {
                if (mat[i][j] == 0)
                {
                    distance[i][j] = 0;
                    queue.Enqueue((i, j)); //Put all 0s in the queue.
                }
            }
        }

        (int r, int c)[] directions = new (int r, int c)[] { (-1, 0), (1, 0), (0, -1), (0, 1) };

        var currentLevel = 0;
        while (queue.Count != 0)
        {
            currentLevel++;
            var totalNodes = queue.Count;
            while (totalNodes > 0)
            {
                var curr = queue.Dequeue();
                foreach (var direction in directions)
                {
                    var row = curr.r + direction.r;
                    var col = curr.c + direction.c;
                    if (0 <= row && row < rowSize
                        && 0 <= col && col < colSize
                        && mat[row][col] != 0
                        && distance[row][col] == 0)
                    {
                        distance[row][col] = currentLevel;
                        queue.Enqueue((row, col));
                    }
                }
                totalNodes--;
            }
        }

        return distance;
    }
}