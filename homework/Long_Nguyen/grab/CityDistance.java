import java.util.*;

/**
 * Created by Long Nguyen
 */
public class CityDistance {
    public int[] solution(int[] T) {
        int[] distance = new int[T.length];

        Map<Integer, List<Integer>> adjList = new HashMap<>();
        int start = -1;
        for (int i = 0; i < T.length; i++) {
            if (T[i] == i) {
                start = i;
                continue;
            }
            List<Integer> adjListOfTi = adjList.getOrDefault(T[i], new ArrayList<>());
            adjListOfTi.add(i);
            adjList.put(T[i], adjListOfTi);
        }

        ArrayDeque<int[]> queue = new ArrayDeque<>();
        queue.offerLast(new int[]{start, 0});

        while (!queue.isEmpty()) {
            int[] node = queue.pollFirst();
            int city = node[0];
            int dist = node[1];
            distance[city] = dist;

            for (int i : adjList.getOrDefault(city, new ArrayList<>())) {
                queue.offerLast(new int[]{i, dist + 1});
            }
        }

        int[] ans = new int[T.length - 1];
        int j = 0;
        for (int i = 0; i < distance.length; i++) {
            if (distance[i] == 0)
                continue;
            ans[j++] = distance[i];
        }

        return ans;
    }

    public static void main(String[] args) {
        CityDistance sol = new CityDistance();
        int[] T = new int[]{9, 1, 4, 9, 0, 4, 8, 9, 0, 1};
        sol.solution(T);
    }
}
