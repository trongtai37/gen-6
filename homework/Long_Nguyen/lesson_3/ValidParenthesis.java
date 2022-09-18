import java.util.ArrayDeque;
import java.util.Deque;

public class ValidParenthesis {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.offerFirst(c);
            } else {
                Character top = stack.peekFirst();
                switch (c) {
                    case ')':
                        if (top != null && top == '(') {
                            stack.pollFirst();
                        } else {
                            stack.offerFirst(c);
                        }
                        break;
                    case '}':
                        if (top != null && top == '{') {
                            stack.pollFirst();
                        } else {
                            stack.offerFirst(c);
                        }
                        break;
                    case ']':
                        if (top != null && top == '[') {
                            stack.pollFirst();
                        } else {
                            stack.offerFirst(c);
                        }
                        break;
                }
            }
        }

        return stack.isEmpty();
    }
}
