function minCostClimbingStairs(cost: number[]): number {
  for (let i = 2; i < cost.length; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
  }

  return Math.min(cost.pop()!, cost.pop()!);
}
