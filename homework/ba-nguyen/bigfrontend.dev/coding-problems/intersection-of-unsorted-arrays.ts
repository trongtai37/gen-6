function getIntersection(arr1: number[], arr2: number[]): number[] {
  const hash: { [key: string]: number } = {};

  for (let numb of arr1) {
    if (hash[numb]) {
      hash[numb]++;
    } else {
      hash[numb] = 1;
    }
  }

  const result: number[] = [];
  for (let numb of arr2) {
    if (hash[numb] && !result.includes(numb)) {
      result.push(numb);
    }
  }

  return result;
}
