function findPairs(numbs: number[], k: number): number {
  const hashMap: { [key: string]: number } = {};

  for (let i = 0; i < numbs.length; i++) {
    const key = numbs[i];
    if (hashMap[key] === undefined) {
      hashMap[key] = 1;
    } else {
      hashMap[key]++;
    }
  }

  let count = 0;
  for (const num of Object.keys(hashMap)) {
    if (
      (k > 0 && hashMap[Number(num) + k] !== undefined) ||
      (k === 0 && hashMap[num] > 1)
    ) {
      count++;
    }
  }

  return count;
}
