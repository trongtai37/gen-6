import java.util.Arrays;

/**
 * Created by Long Nguyen
 */
public class TwoSumLessThanK {
    public int twoSumLessThanK(int[] nums, int k) {
        Arrays.sort(nums);
        int first = 0;
        int second = nums.length - 1;
        int ans = -1;

        while (first < second) {
            int sum = nums[first] + nums[second];
            if (sum < k) {
                ans = Math.max(ans, sum);
                first++;
            } else {
                second--;
            }
        }

        return ans;
    }
}
