function kClosest(points: number[][], k: number): number[][] {
  let left = 0;
  let right = points.length - 1;

  return quickSelect(points, left, right, k);
}

function quickSelect(
  points: number[][],
  left: number,
  right: number,
  k: number
) {
  let pivotIndex = partition(points, left, right);

  if (pivotIndex === k) {
    return points.slice(0, k);
  }

  if (pivotIndex < k) {
    return quickSelect(points, pivotIndex + 1, right, k);
  }

  return quickSelect(points, left, pivotIndex - 1, k);
}

function partition(points: number[][], left: number, right: number): number {
  let pivot = points[right];
  let boundary = left;

  for (let i = left; i < right; i++) {
    const distanceOfPoint = squareDistance(points[i]);
    const distanceOfPivot = squareDistance(pivot);
    if (distanceOfPoint < distanceOfPivot) {
      swap(points, boundary, i);
      boundary++;
    }
  }

  swap(points, boundary, right);
  return boundary;
}

function squareDistance(point1: number[]) {
  return Math.pow(point1[0], 2) + Math.pow(point1[1], 2);
}

function swap(numbs: number[][], i: number, j: number) {
  [numbs[i], numbs[j]] = [numbs[j], numbs[i]];
}
