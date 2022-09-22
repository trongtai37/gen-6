function solve1(arr: number[]) {
  let temp = 0;
  let res = -Infinity;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      temp += arr[i];
      res = Math.max(res, temp);
    } else {
      temp = 0;
    }
  }

  return res === -Infinity ? -1 : res;
}

console.log(solve1([1, 2, -3, 4, 5, -6]));
console.log(solve1([-1, -2, -3, -4, -5, -6]));
console.log(solve1([-1, -2, 0, -4, -5, -6]));
