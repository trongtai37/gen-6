// there are two pointers i and j maintaining the rule that:
// everything is left of i pointer will have the parity 0
// everything is right of j pointer will have the parity 1
// if we maintain the rule, the distance between i and j will get closer.

public class SortArray
{
    public int[] SortArrayByParity(int[] nums)
    {
        int i = 0, j = nums.Length - 1;

        while (i <= j)
        {
            if (nums[i] % 2 > nums[j] % 2)
            {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }

            if (nums[i] % 2 == 0) i++;
            if (nums[j] % 2 == 1) j--;
        }

        return nums;
    }
}