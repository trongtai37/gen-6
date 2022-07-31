class NumArray {
  prefixSum: number[] = [];

  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i] = (this.prefixSum[i - 1] ?? 0) + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right] - (this.prefixSum[left - 1] ?? 0);
  }
}
