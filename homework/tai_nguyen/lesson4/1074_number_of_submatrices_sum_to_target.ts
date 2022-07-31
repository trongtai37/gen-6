function getPrefixSumValue(matrix: number[][], i: number, j: number) {
  if (i < 0 || j < 0) return 0;

  return matrix[i][j];
}

function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  // calculate prefix 2D array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] +=
        getPrefixSumValue(matrix, i - 1, j) +
        getPrefixSumValue(matrix, i, j - 1) -
        getPrefixSumValue(matrix, i - 1, j - 1);
    }
  }

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const map = new Map<
        number /* the prefix sum of submatrix(left-col=0, top=i,bottom=j) */,
        number /* frequency */
      >();
      map.set(0, 1); // for calculate subarray start from col = 0

      for (let c = 0; c < matrix[0].length; c++) {
        const currentPrefixSum =
          getPrefixSumValue(matrix, j, c) - getPrefixSumValue(matrix, i - 1, c);

        if (map.has(currentPrefixSum - target)) {
          count += map.get(currentPrefixSum - target)!;
        }

        map.set(
          currentPrefixSum,
          map.has(currentPrefixSum) ? map.get(currentPrefixSum)! + 1 : 1
        );
      }
    }
  }

  return count;
}
