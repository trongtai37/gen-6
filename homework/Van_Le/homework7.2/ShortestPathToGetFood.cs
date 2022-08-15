// explaination: https://bit.ly/3JIHOqe
public class ShortestPathToGetFood
{
    public int GetFood(char[][] grid)
    {
        int rows = grid.Length;
        int columns = grid[0].Length;
        Queue<(int, int)> queue = new Queue<(int, int)>();

        for (int row = 0; row < rows; row++)
        {
            for (int column = 0; column < columns; column++)
            {
                if (grid[row][column] == '*')
                {
                    queue.Enqueue((row, column));
                    grid[row][column] = '-'; //Mark as visited
                    break;
                }
            }
        }

        int steps = 0;
        (int, int)[] directions = new (int, int)[] { (-1, 0), (1, 0), (0, -1), (0, 1) };
        while (queue.Count > 0)
        {
            int size = queue.Count;
            steps++;
            for (int i = 0; i < size; i++)
            {
                (int row, int column) = queue.Dequeue();
                foreach (var direction in directions)
                {
                    int nextRow = row + direction.Item1;
                    int nextColumn = column + direction.Item2;

                    if (nextRow < 0 || nextRow >= rows || nextColumn < 0 || nextColumn >= columns ||
                        grid[nextRow][nextColumn] == 'X' || grid[nextRow][nextColumn] == '-')
                        continue;

                    if (grid[nextRow][nextColumn] == '#')
                        return steps;

                    grid[nextRow][nextColumn] = '-'; //Mark as visited
                    queue.Enqueue((nextRow, nextColumn));
                }
            }
        }

        return -1;
    }
}