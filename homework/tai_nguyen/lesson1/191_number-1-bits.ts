function getBit(n: number, position: number) {
  return (n >> position) & 1;
}

function hammingWeight(n: number): number {
  let sum = 0;
  for (let i = 0; i <= Math.floor(Math.log2(n)); i++) {
    sum += getBit(n, i);
  }

  return sum;
};