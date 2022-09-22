function solve2(s: string) {
  let isFirstOneMet = false;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '1') {
      res += isFirstOneMet ? 2 : 1;
      isFirstOneMet = true;
    } else {
      res += isFirstOneMet ? 1 : 0;
    }
  }

  return res;
}

console.log(solve2(Number(28).toString(2)));
console.log(solve2(Number(7).toString(2)));
console.log(solve2('1'.repeat(4e5)));
