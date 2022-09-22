function solve3(ranks: number[]) {
  const set = new Set<number>(ranks);

  let res = 0;
  ranks.forEach((r) => {
    if (set.has(r + 1)) {
      res++;
    }
  });

  return res;
}

console.log(solve3([3, 4, 3, 0, 2, 2, 3, 0, 0]));
console.log(solve3([4, 2, 0]));
console.log(solve3([4, 4, 3, 3, 1, 0]));
