// Solution for https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const getWeight = (point) => (point[0] * point[0] + point[1] * point[1]);

const swap = (points, i, j) => {
  [points[i], points[j]] = [points[j], points[i]];
};

const partition = (points, start, end) => {
  const pivotWeight = getWeight(points[end]);
  let boundary = start;

  for (let i = start; i < end; i++) {
    if (getWeight(points[i]) <= pivotWeight) {
      swap(points, i, boundary);
      boundary++;
    }
  }
  swap(points, boundary, end);
  return boundary;
};

const kClosestUtil = (points, start, end, pos) => {
  const pivotIndex = partition(points, start, end);
  console.log(points);
  console.log(pivotIndex);

  if (pivotIndex === pos) {
    const ans = [];
    for (let i = 0; i <= pos; i++) {
      ans.push(points[i]);
    }
    return ans;
  }

  if (pivotIndex > pos) {
    return kClosestUtil(points, start, pivotIndex - 1, pos);
  }
  return kClosestUtil(points, pivotIndex + 1, end, pos);
};

var kClosest = function (points, k) {
  const N = points.length;
  return kClosestUtil(points, 0, N - 1, k - 1);
};