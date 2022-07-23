function sumDigits(n: number): number {
  let totalSum = 0;
  while (n > 0) {
    let d = n % 10;
    n = Math.floor(n / 10);
    totalSum += d * d;
  }
  return totalSum;
}

function isHappy(n: number): boolean {
  const arraySumDigits: number[] = [];
  let num = n;

  while (num !== 1 && !arraySumDigits.includes(num)) {
    arraySumDigits.push(num);
    num = sumDigits(num);
  }

  return num === 1;
}
