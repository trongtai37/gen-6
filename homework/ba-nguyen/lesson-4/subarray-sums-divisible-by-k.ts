function subarraysDivByK(numbs: number[], k: number): number {
  const prefixSums: number[] = [numbs[0]];
  const hashMap: { [key: string]: number } = {};

  for (let i = 1; i < numbs.length; i++) {
    prefixSums[i] = prefixSums[i - 1] + numbs[i];
  }

  for (let i = 0; i < numbs.length; i++) {
    const key = ((prefixSums[i] % k) + k) % k;
    hashMap[key] = (hashMap[key] || -1) + 1;
  }

  let res = 0;
  hashMap[0] = 1;
  for (let i = 0; i < numbs.length; i++) {
    const remain = ((prefixSums[i] % k) + k) % k;
    res += hashMap[remain];
    hashMap[remain]++;
  }

  return res;
}
