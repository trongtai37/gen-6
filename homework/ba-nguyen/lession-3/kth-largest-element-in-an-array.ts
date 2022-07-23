function swap(numbs: number[], i: number, j: number) {
  [numbs[i], numbs[j]] = [numbs[j], numbs[i]];
}

function partition(numbs: number[], left: number, right: number) {
  let boundary = left;
  const pivot = numbs[right];

  for (let i = left; i < right; i++) {
    if (numbs[i] < pivot) {
      swap(numbs, i, boundary);
      boundary++;
    }
  }
  swap(numbs, right, boundary);
  return boundary;
}

function quickSelect(numbs: number[], left: number, right: number, k: number) {
  const pivotIndex = partition(numbs, left, right);
  if (pivotIndex === k) return numbs[pivotIndex];
  if (pivotIndex < k) return quickSelect(numbs, pivotIndex + 1, right, k);
  return quickSelect(numbs, left, pivotIndex - 1, k);
}

function findKthLargest(numbs: number[], k: number) {
  return quickSelect(numbs, 0, numbs.length - 1, numbs.length - k);
}
