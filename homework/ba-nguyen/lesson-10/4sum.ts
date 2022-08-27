function fourSum(numbs: number[], target: number): number[][] {
  numbs.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < numbs.length - 3; i++) {
    if (i === 0 || numbs[i] !== numbs[i - 1]) {
      for (let j = i + 1; j < numbs.length - 2; j++) {
        if (j === i + 1 || numbs[j] !== numbs[j - 1]) {
          let lo = j + 1;
          let hi = numbs.length - 1;

          while (lo < hi) {
            const sum = numbs[i] + numbs[j] + numbs[lo] + numbs[hi];
            if (sum === target) {
              res.push([numbs[i], numbs[j], numbs[lo], numbs[hi]]);
              while (lo < hi && numbs[lo] === numbs[lo + 1]) lo++;
              while (lo < hi && numbs[hi] === numbs[hi + 1]) hi--;
              lo++;
              hi--;
            } else if (sum < target) {
              lo++;
            } else {
              hi--;
            }
          }
        }
      }
    }
  }

  return res;
}
