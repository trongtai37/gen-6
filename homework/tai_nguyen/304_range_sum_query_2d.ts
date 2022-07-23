class NumMatrix {
  prefixSum2D: number[][];

  private getValue(i: number, j: number): number {
    if (i < 0 || j < 0) {
      return 0;
    }

    return this.prefixSum2D[i][j];
  }

  constructor(matrix: number[][]) {
    this.prefixSum2D = new Array(matrix.length)
      .fill(true)
      .map(() => new Array(matrix[0].length).fill(0));

    matrix.forEach((row, i) => {
      row.forEach((cell, j) => {
        this.prefixSum2D[i][j] =
          this.getValue(i - 1, j) +
          this.getValue(i, j - 1) +
          cell -
          this.getValue(i - 1, j - 1);
      });
    });
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.getValue(row2, col2) -
      this.getValue(row1 - 1, col2) -
      this.getValue(row2, col1 - 1) +
      this.getValue(row1 - 1, col1 - 1)
    );
  }
}
