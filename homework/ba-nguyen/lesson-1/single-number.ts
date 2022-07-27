function singleNumber(numbs: number[]) {
  if (numbs.length === 1) return numbs[0];

  const obj: { [key: string]: number } = {};
  for (let i = 0; i < numbs.length; i++) {
    if (typeof obj[numbs[i]] === "undefined") {
      obj[numbs[i]] = 0;
    } else {
      obj[numbs[i]]++;
    }
  }

  for (const i in obj) {
    if (obj[i] === 0) return Number(i);
  }
}
