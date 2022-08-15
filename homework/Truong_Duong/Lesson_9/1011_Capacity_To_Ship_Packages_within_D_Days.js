// Solution for https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let totalWeight = 0, maxWeight = weights[0];
  for (const weight of weights) {
    maxWeight = Math.max(maxWeight, weight);
    totalWeight += weight;
  }

  let lo = 0, hi = totalWeight;
  let ans;

  const isDivisible = (weight) => {
    if(weight < maxWeight) return false;

    let portions = 0, i = 0;
    while (i < weights.length) {
      let sumTemp = 0;

      while (i < weights.length && sumTemp + weights[i] <= weight) {
        sumTemp += weights[i];
        i += 1;
      }
      portions += 1;
    }
    return portions <= days;
  }

  while (hi >= lo) {
    const mid = lo + Math.floor((hi - lo) / 2);

    if (isDivisible(mid)) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return ans;
};