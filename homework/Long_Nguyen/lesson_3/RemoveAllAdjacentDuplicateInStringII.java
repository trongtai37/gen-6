import java.util.ArrayDeque;
import java.util.Deque;

public class RemoveAllAdjacentDuplicateInStringII {
    public String removeDuplicates(String s, int k) {
        Deque<Character> queue = new ArrayDeque<>();
        Deque<Integer> count = new ArrayDeque<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            count.offerLast((queue.size() > 0 && c == queue.peekLast()) ? count.peekLast() + 1 : 1);
            queue.offerLast(c);
            if (count.peekLast() == k) {
                int temp = k;
                while (temp-- > 0) {
                    queue.pollLast();
                    count.pollLast();
                }
            }
        }

        StringBuilder ans = new StringBuilder();
        while (!queue.isEmpty()) {
            ans.append(queue.pollFirst());
        }

        return ans.toString();
    }
}
