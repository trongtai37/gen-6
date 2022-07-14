/**
 * Created by Long Nguyen
 * Date: 10/07/2022 21:54
 */

// https://leetcode.com/problems/range-sum-query-immutable/
class NumArray {
    private int[] prefixSum;

    public NumArray(int[] nums) {
        this.prefixSum = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }

    public int sumRange(int left, int right) {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}
