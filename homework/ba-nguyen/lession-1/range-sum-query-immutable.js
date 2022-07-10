/**
 * @param {number[]} numbs
 */
const NumArray = function (numbs) {
  this.prefixNumbs = [numbs[0]];

  for (let i = 1; i < numbs.length; i++) {
    this.prefixNumbs[i] = this.prefixNumbs[i - 1] + numbs[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  console.log(this.prefixNumbs[right], this.prefixNumbs[left]);
  return this.prefixNumbs[right] - (this.prefixNumbs[left - 1] || 0);
};
