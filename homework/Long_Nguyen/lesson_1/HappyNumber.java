import java.util.HashSet;
import java.util.Set;

/**
 * Created by Long Nguyen
 * Date: 10/07/2022 22:38
 */
public class HappyNumber {
    private int next(int n) {
        int total = 0;
        while (n > 0) {
            int d = n % 10;
            n /= 10;

            total += (d * d);
        }

        return total;
    }

    public boolean isHappy(int n) {
        Set<Integer> seen = new HashSet<>();

        while (true) {
            n = next(n);

            if (n == 1) return true;
            if (seen.contains(n)) {
                return false;
            } else {
                seen.add(n);
            }
        }
    }
}
