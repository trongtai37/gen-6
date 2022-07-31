import java.util.HashMap;
import java.util.Map;

public class KDiffPairsInArray {
    public int findPairs(int[] nums, int k) {
        int ans = 0;
        Map<Integer, Integer> freq = new HashMap<>();

        for (int n : nums) {
            freq.put(n, freq.getOrDefault(n, 0) + 1);
        }

        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            int key = entry.getKey();
            int val = entry.getValue();
            if (k > 0 && freq.containsKey(key + k)) {
                ans++;
            } else {
                if (k == 0 && val > 1) {
                    ans++;
                }
            }
        }

        return ans;
    }
}
