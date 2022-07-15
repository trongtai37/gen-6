/**
 * Created by Long Nguyen
 * Date: 15/07/2022 00:41
 */

// https://leetcode.com/problems/sort-array-by-parity/
public class SortArrayByPairity {
    public int[] sortArrayByParity(int[] nums) {
        boolean pivot = nums[0] % 2 == 0;

        int boundary = 0;
        for (int i = 0; i < nums.length; i++) {
            boolean isEven = nums[i] % 2 == 0;
            if (isEven != pivot) {
                swap(nums, i, boundary);
                boundary++;
            }
        }

        if (pivot) {
            boundary = nums.length - 1;
            for (int i = nums.length - 1; i >= 0; i--) {
                boolean isEven = nums[i] % 2 == 0;
                if (isEven != pivot) {
                    swap(nums, i, boundary);
                    boundary--;
                }
            }
        }

        return nums;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

//    public static void main(String[] args) {
//        SortArrayByPairity sol = new SortArrayByPairity();
//        sol.sortArrayByParity(new int[]{3, 1, 2, 4});
//        sol.sortArrayByParity(new int[]{2, 1, 3, 4});
//    }
}
