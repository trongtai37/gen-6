function coinChange(coins: number[], amount: number): number {
  const f = new Array(amount + 1).fill(Infinity);
  f[0] = 0;
  for (let i = 1; i <= amount; i++) {
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        f[i] = Math.min(f[i], f[i - coin] + 1);
      }
    });
  }

  return f[amount] === Infinity ? -1 : f[amount];
}
