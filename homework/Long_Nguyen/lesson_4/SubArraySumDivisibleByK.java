import java.util.HashMap;
import java.util.Map;

public class SubArraySumDivisibleByK {
    public int subarraysDivByK(int[] nums, int k) {
        int ans = 0;
        Map<Integer, Integer> freq = new HashMap<>();

        freq.put(0, 1);
        int sum = 0;
        for (int num : nums) {
            sum = (sum + num) % k;
            if (sum < 0)
                sum += k;
            ans += freq.getOrDefault(sum, 0);
            freq.put(sum, freq.getOrDefault(sum, 0) + 1);
        }

        return ans;
    }
}
