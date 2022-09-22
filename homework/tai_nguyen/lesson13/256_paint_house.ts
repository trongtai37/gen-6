enum HouseColor {
  Red = 0,
  Blue = 1,
  Green = 2,
}

function minCost(costs: number[][]): number {
  const dp = new Array(costs.length).fill(true).map(() => new Array(3).fill(0));

  dp[0][HouseColor.Red] = costs[0][HouseColor.Red];
  dp[0][HouseColor.Blue] = costs[0][HouseColor.Blue];
  dp[0][HouseColor.Green] = costs[0][HouseColor.Green];

  for (let i = 1; i < costs.length; i++) {
    dp[i][HouseColor.Red] =
      Math.min(dp[i - 1][HouseColor.Blue], dp[i - 1][HouseColor.Green]) +
      costs[i][HouseColor.Red];

    dp[i][HouseColor.Blue] =
      Math.min(dp[i - 1][HouseColor.Red], dp[i - 1][HouseColor.Green]) +
      costs[i][HouseColor.Blue];

    dp[i][HouseColor.Green] =
      Math.min(dp[i - 1][HouseColor.Red], dp[i - 1][HouseColor.Blue]) +
      costs[i][HouseColor.Green];
  }

  return Math.min(...dp.pop()!);
}
