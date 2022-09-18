/**
 * Created by Long Nguyen
 */
public class FindEquilibriumIndex {
    public int solution(int[] A) {
        int[] prefixSumLeft = new int[A.length + 1];
        int[] prefixSumRight = new int[A.length + 1];

        for (int i = 1; i < A.length; i++) {
            prefixSumLeft[i] = prefixSumLeft[i - 1] + A[i];
        }
        for (int i = A.length - 1; i >= 1; i--) {
            prefixSumRight[i] = prefixSumRight[i + 1] + A[i];
        }

        for (int i = 1; i < A.length + 1; i++) {
            if (prefixSumLeft[i] == prefixSumRight[i])
                return i - 1;
        }

        return -1;
    }

    public static void main(String[] args) {
        FindEquilibriumIndex sol = new FindEquilibriumIndex();
        int ans = sol.solution(new int[]{-1, 3, -4, 5, 1, -6, 2, 1});
        System.out.println(ans);
    }
}
