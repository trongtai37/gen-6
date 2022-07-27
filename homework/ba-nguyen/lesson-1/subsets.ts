function subsets(numbs: number[]): number[][] {
  let result: number[][] = [[]];

  for (let num of numbs) {
    const newSubsets: number[][] = [];
    for (let elements of result) {
      newSubsets.push([...elements, num]);
    }
    result = result.concat(newSubsets);
  }

  return result;
}
