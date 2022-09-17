import java.util.HashSet;
import java.util.Set;

/**
 * Created by Long Nguyen
 */
public class PermCheck {
    public int solution(int[] A) {
        int N = A.length;
        Set<Integer> set = new HashSet<>();
        for (int num : A) {
            if (num > N || num < 1)
                return 0;
            if (set.contains(num))
                return 0;
            set.add(num);
        }

        return 1;
    }
}
