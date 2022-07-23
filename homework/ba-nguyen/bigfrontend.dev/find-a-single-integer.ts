function findSingle(arr: number[]): number {
  let singleNumber = 0;
  for (const ele of arr) {
    singleNumber ^= ele;
  }

  return singleNumber;
}
