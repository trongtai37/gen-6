// the current sum variable will keep track of the current contiguous sum and the max sum variable will point out the largest contiguous sum, if 
// the current sum is larger than max sum, it proves that current sum is now the largest sum and we need to copy that largest sum to max sum
// the current sum is a negative number, it means the current sum is not contiguous 
// so we need to reset the current sum

public class MaximumSubArray {
    public int MaxSubArray(int[] nums) {
        int maxSum = int.MinValue, currSum = 0;
        
        for (int i = 0; i < nums.Length; i++)
        {
            currSum += nums[i];
            if (currSum > maxSum) maxSum = currSum;
            if (currSum < 0) currSum = 0;
        }
        return maxSum;
    }
}