function solution(array: number[]): number {
  let res1 = 0;
  let res2 = 0;

  array.forEach((num, index) => {
    if (index % 2 === 0) {
      res1 += num === 0 ? 1 : 0;
      res2 += num === 1 ? 1 : 0;
    } else {
      res1 += num === 1 ? 1 : 0;
      res2 += num === 0 ? 1 : 0;
    }
  });

  return Math.min(res1, res2);
}

console.log(solution([1, 0, 1, 0, 1, 1])); // 1
console.log(solution([1, 1, 0, 1, 1])); // 2
console.log(solution([0, 1, 0])); // 0
console.log(solution([0, 1, 1, 0])); // 2
