import java.util.ArrayDeque;
import java.util.List;

public class KeysAndRooms {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        boolean[] visited = new boolean[rooms.size()];
        ArrayDeque<Integer> stack = new ArrayDeque<>();

        stack.offerFirst(0);
        visited[0] = true;

        while (!stack.isEmpty()) {
            int room = stack.pollFirst();
            for (int roomId : rooms.get(room)) {
                if (!visited[roomId]) {
                    visited[roomId] = true;
                    stack.offerFirst(roomId);
                }
            }
        }

        for (boolean visit : visited) {
            if (!visit)
                return false;
        }

        return true;
    }
}
