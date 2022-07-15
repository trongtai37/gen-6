import java.util.ArrayList;
import java.util.List;

/**
 * Created by Long Nguyen
 * Date: 15/07/2022 22:14
 */

// https://leetcode.com/problems/subsets/
public class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();

        if (nums == null || nums.length == 0)
            return ans;

        int numOfSubsets = (int)Math.pow(2, nums.length);
        for (int i = 0; i < numOfSubsets; i++) {
            List<Integer> subset = new ArrayList<>();
            for (int j = 0; j < nums.length; j++) {
                if (((i >> j) & 1) == 1) {
                    subset.add(nums[j]);
                }
            }
            ans.add(subset);
        }

        return ans;
    }
}
