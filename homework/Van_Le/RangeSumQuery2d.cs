// for constructor, let's make a prefix sum as a cache for 2d array
// for each query, use that cache to return the expected result so that the time complexity is O(1)
// time complexity of constructor is O(m.n) for m is the length of the matrix row and n is the length of the matrix column

public class RangeSumQuery2d {
    private int[,] sums;
    
    public NumMatrix(int[][] matrix) 
    {
        if(matrix == null || matrix.Length == 0)
        {
            return;
        }
        
        sums = new int[matrix.Length + 1, matrix[0].Length + 1];
        
        for(int row = 1; row <= matrix.Length; row++)
        {
            for(int column = 1; column <= matrix[row - 1].Length; column++)
            {
                sums[row, column] = sums[row - 1, column] +  sums[row, column - 1]
                     + matrix[row - 1][column - 1] - sums[row - 1, column - 1];
            }
        }
    }
    
    public int SumRegion(int row1, int col1, int row2, int col2) 
    {
        if(sums == null)
        {
            return 0;
        }
        
        return sums[row2 + 1, col2 + 1]  - sums[row1, col2 + 1]  - sums[row2 + 1, col1]  
					+ sums[row1, col1];
    }
}
