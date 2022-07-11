/**
 * Created by Long Nguyen
 * Date: 10/07/2022 21:33
 */
public class SingleNumber {
    public int singleNumber(int[] nums) {
        int xorRes = 0;

        for (int num : nums) {
            xorRes ^= num;
        }

        return xorRes;
    }
}
