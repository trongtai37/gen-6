import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Long Nguyen
 */
public class LongestSubstringWithAtMostTwoDistinctCharacters {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        if (s.length() == 1)
            return 1;

        Map<Character, Integer> appear = new HashMap<>();
        int first = 0;
        int second = 0;
        int ans = 0;

        while (second < s.length()) {
            appear.put(s.charAt(second), second);
            second++;

            if (appear.size() == 3) {
                int deleteIdx = Collections.min(appear.values());
                appear.remove(s.charAt(deleteIdx));
                first = deleteIdx + 1;
            }
            ans = Math.max(ans, second - first);
        }

        return ans;
    }
}
