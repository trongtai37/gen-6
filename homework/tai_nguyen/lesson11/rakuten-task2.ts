function solution(array: number[]): number {
  const n = array.length;
  const maxLefts: number[] = [array[0]];
  const minRights: number[] = [array[n - 1]];

  let i;
  for (i = 1; i < n; i++) {
    maxLefts.push(Math.max(array[i], maxLefts[maxLefts.length - 1]));
  }

  for (i = n - 2; i >= 0; i--) {
    minRights.unshift(Math.min(array[i], minRights[0]));
  }

  let res = 0;
  for (i = 0; i < n - 1; i++) {
    if (maxLefts[i] < minRights[i + 1]) {
      res = i + 1;
      break;
    }
  }

  return res;
}

console.log(solution([5, -2, 3, 8, 6])); // 3
console.log(solution([-5, -5, -5, -42, 6, 12])); // 4
