function distance(point1: number[], point2: number[] = [0, 0]): number {
  return (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2;
}

function partitionByDistance(points: number[][], left: number, right: number) {
  if (left >= right) return left;

  let k = left;
  const pivot = distance(points[right]);
  for (let j = left; j < right; j++) {
    if (distance(points[j]) < pivot) {
      [points[k], points[j]] = [points[j], points[k]];
      k++;
    }
  }

  [points[k], points[right]] = [points[right], points[k]];
  return k;
}

function quickSelect(
  points: number[][],
  k: number,
  left: number = 0,
  right: number = points.length - 1
): number[] | undefined {
  if (k > points.length) {
    return undefined;
  }

  const p = partitionByDistance(points, left, right);
  if (p === k) {
    return points[k];
  }

  if (p < k) {
    return quickSelect(points, k, p + 1, right);
  }

  return quickSelect(points, k, left, p - 1);
}

function kClosest(points: number[][], k: number): number[][] {
  quickSelect(points, k - 1);
  return points.slice(0, k);
}
