function frequencySort(nums: number[]): number[] {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 0);
    }

    map.set(num, map.get(num)! + 1);
  });

  return Array.from(map.entries())
    .sort(([n1, f1], [n2, f2]) => {
      if (f1 === f2) {
        return n2 - n1;
      }

      return f1 - f2;
    })
    .reduce<number[]>((acc, [n, f]) => acc.concat(new Array(f).fill(n)), []);
}
