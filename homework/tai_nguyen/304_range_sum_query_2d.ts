class NumMatrix {
  prefixSum2D: number[][];
  constructor(matrix: number[][]) {
    this.prefixSum2D = new Array(matrix.length)
      .fill(true)
      .map(() => new Array(matrix[0].length).fill(0));

    matrix.forEach((row, i) => {
      row.forEach((cell, j) => {
        this.prefixSum2D[i][j] =
          (this.prefixSum2D[i - 1]?.[j] ?? 0) +
          (this.prefixSum2D[i]?.[j - 1] ?? 0) +
          cell -
          (this.prefixSum2D[i - 1]?.[j - 1] ?? 0);
      });
    });
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.prefixSum2D[row2][col2] -
      (this.prefixSum2D[row1 - 1]?.[col2] ?? 0) -
      (this.prefixSum2D[row2]?.[col1 - 1] ?? 0) +
      (this.prefixSum2D[row1 - 1]?.[col1 - 1] ?? 0)
    );
  }
}
