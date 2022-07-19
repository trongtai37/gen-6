// need to cache the prefix sum in constructor because we have a great amount of query
// so, at the first time, we cache prefix sum at O(n) runtime complexity so that each query just take only O(1) runtime complexity
// call sum is the prefix sum of nums
// sum[n] = nums[0] + nums[1] + ... + nums[n-1]
// so if we need to query the sum range of nums from left to right, take the subtraction of sum[right-1] and sum[left]
// sum[left] = nums[0] + nums[1] + ... + nums[left-1]
// sum[right+1] = nums[0] + nums[1] + ... + nums[right]
// sum[right] - sum[left] = nums[left] + nums[left + 1] +...+nums[right]
// time complexity for constructor: O(n) with n is the length of nums, space complexity for constructor is O(n)
// time complexity and space complexity for query: O(1)

public class NumArray
{
    private int[] sum;
    public NumArray(int[] nums)
    {
        sum = new int[nums.Length + 1];

        for (int i = 0; i < nums.Length; i++)
        {
            sum[i + 1] = nums[i] + sum[i];
        }
    }

    public int SumRange(int left, int right)
    {
        return sum[right + 1] - sum[left];
    }
}
