class NumMatrix {

    int[][] sumMatrix;
    
    public NumMatrix(int[][] matrix) {
        
        sumMatrix = new int[matrix.length + 1][matrix[0].length + 1];
        for (int i = 1; i < matrix.length + 1; i++) {
            for (int j = 1; j < matrix[0].length + 1; j++) {
                sumMatrix[i][j] = sumMatrix[i][j - 1] + sumMatrix[i - 1][j] - sumMatrix[i - 1][j - 1]  + matrix[i - 1][j - 1];
            }
        }
        printMatrix(sumMatrix);
    }
    
    public int sumRegion(int row1, int col1, int row2, int col2) {
        return sumMatrix[row2+1][col2+1] - sumMatrix[row1][col2+1] - sumMatrix[row2+1][col1] + sumMatrix[row1][col1];
    }
	
	private static void printArr(int[] nums) {
		System.out.print("[");
		for (int i = 0; i < nums.length; i++) {
			System.out.print(String.format(" %d ", nums[i]));
		}
		System.out.println("]");
	}

	private static void printMatrix(int[][] matrix) {
		System.out.println("[");
		for (int i = 0; i < matrix.length; i++) {
			printArr(matrix[i]);
		}
		System.out.println("]");
	}
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * int param_1 = obj.sumRegion(row1,col1,row2,col2);
 */