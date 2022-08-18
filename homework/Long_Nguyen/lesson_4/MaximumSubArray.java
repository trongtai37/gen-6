public class MaximumSubArray {
    public int maxSubArray(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int maxSum = nums[0];
        int maxSumArray = nums[0];

        for (int i = 1; i < nums.length; i++) {
            int num = nums[i];
            maxSum = Math.max(num, maxSum + num);
            maxSumArray = Math.max(maxSumArray, maxSum);
        }

        return maxSumArray;
    }
}
