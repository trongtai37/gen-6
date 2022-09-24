function longestPalindrome(s: string): string {
  const n = s.length;
  const cache = new Array(n).fill(true).map(() => new Array(n).fill(undefined));

  function check(i: number, j: number) {
    if (cache[i][j] !== undefined) {
      return cache[i][j];
    }

    if (i === j) {
      cache[i][j] = true;
    } else if (i + 1 === j) {
      cache[i][j] = s.charAt(i) === s.charAt(j);
    } else {
      cache[i][j] = s.charAt(i) === s.charAt(j) ? check(i + 1, j - 1) : false;
    }

    return cache[i][j];
  }

  let res = [0, 0];
  for (let l = 0; l < n; l++) {
    for (let i = 0; i < n; i++) {
      const j = i + l;
      if (j < n && l + 1 > res[1] - res[0] + 1 && check(i, j)) {
        res = [i, j];
      }
    }
  }

  return s.slice(res[0], res[1] + 1);
}
