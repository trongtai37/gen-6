/**
 * Created by Long Nguyen
 */
public class LongestMountainInArray {
    public int longestMountain(int[] arr) {
        int ans = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            if (isPeak(arr, i)) {
                int left = i - 1;
                int right = i + 1;
                while (left - 1 >= 0 && arr[left - 1] < arr[i] && arr[left - 1] < arr[left]) {
                    left--;
                }
                while (right + 1 < arr.length && arr[right + 1] < arr[i] && arr[right + 1] < arr[right]) {
                    right++;
                }
                ans = Math.max(ans, right - left + 1);
            }
        }

        return ans;
    }

    private boolean isPeak(int[] arr, int i) {
        return arr[i] > arr[i - 1] && arr[i] > arr[i + 1];
    }
}
