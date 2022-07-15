/**
 * @param {number[][]} matrix
 */
 let sums
 var NumMatrix = function(matrix) {
     // matrix n row x m col
     let n = matrix.length;
     let m = matrix[0].length;
     sums = [...Array(n+1)].map(x => Array(m+1).fill(0))
     for (let i = 1; i <= n; i++) {
         for (let j = 1; j <= m; j++) {
             sums[i][j] = sums[i-1][j] + sums[i][j-1] + matrix[i-1][j-1] - sums[i-1][j-1];
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
 NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
     let outsideRec = sums[row2+1][col2+1];
     let inside2smallRec = sums[row1][col2+1] + sums[row2+1][col1];
     let overlapRec = sums[row1][col1];
     return outsideRec - inside2smallRec + overlapRec;
 };
 
 /** 
  * Your NumMatrix object will be instantiated and called as such:
  * var obj = new NumMatrix(matrix)
  * var param_1 = obj.sumRegion(row1,col1,row2,col2)
  */