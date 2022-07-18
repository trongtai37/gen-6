function partition(
  array: number[],
  left: number = 0,
  right: number = array.length - 1
): number {
  const pivot = array[right];
  let k = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      [array[k], array[i]] = [array[i], array[k]];
      k++;
    }
  }

  [array[k], array[right]] = [array[right], array[k]];

  return k;
}

function quickSelect(
  array: number[],
  k: number,
  left: number = 0,
  right: number = array.length - 1
): number | undefined {
  if (k < 0 || k >= array.length) return undefined;
  if (left > right) return undefined;

  const pivotIndex = partition(array, left, right);
  if (pivotIndex === k) {
    return array[k];
  }

  if (pivotIndex < k) {
    return quickSelect(array, k, pivotIndex + 1, right);
  }

  return quickSelect(array, k, left, pivotIndex - 1);
}

function getValue(matrix: number[][], i: number, j: number) {
  const m = matrix.length;
  const n = matrix[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) return 0;

  return matrix[i][j];
}

function kthLargestValue(matrix: number[][], k: number): number {
  const xorValues: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] ^=
        getValue(matrix, i - 1, j) ^
        getValue(matrix, i, j - 1) ^
        getValue(matrix, i - 1, j - 1);

      xorValues.push(matrix[i][j]);
    }
  }

  return quickSelect(xorValues, xorValues.length - k)!;
}
