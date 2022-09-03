/**
 * Created by Long Nguyen
 */
public class MaxConsecutiveOnesII {
    public int longestOnes(int[] nums, int k) {
        int left = 0;
        int right = 0;
        while (right < nums.length) {
            if (nums[right] == 0) {
                k--;
            }
            if (k < 0) {
                k += 1 - nums[left];
                left++;
            }
            right++;
        }

        return right - left;
    }
}
