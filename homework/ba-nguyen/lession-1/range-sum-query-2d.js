/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  /* 
    initialize value matrix[0].length + 1 times of first row of prefixSums is 
    [[0, 0, 0, ...], [0, 0, 0, ...], ...]
  */
  this.prefixSums = Array.from({ length: matrix.length + 1 }, () =>
    new Array(matrix[0].length + 1).fill(0)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      this.prefixSums[i + 1][j + 1] =
        this.prefixSums[i + 1][j] +
        this.prefixSums[i][j + 1] -
        this.prefixSums[i][j] +
        matrix[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.prefixSums[row2 + 1][col2 + 1] -
    this.prefixSums[row1][col2 + 1] -
    this.prefixSums[row2 + 1][col1] +
    this.prefixSums[row1][col1]
  );
};
