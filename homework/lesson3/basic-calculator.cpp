class Solution {
public:
    int calculate(string s) {
        stack<int> stack;
        long operand = 0;
        int result = 0;
        int sign = 1;

        for (int i = 0; i < s.length(); ++i) {
            char ch = s[i];

            if (ch >= '0' && ch <= '9') {
                operand = 10 * operand + ch - '0';
            } else if (ch == '+') {
                result += sign * operand;
                sign = 1;
                operand = 0;
            } else if (ch == '-') {
                result += sign * operand;
                sign = -1;
                operand = 0;
            } else if (ch == '(') {
                stack.push(result);
                stack.push(sign);

                sign = 1;
                result = 0;
            } else if (ch == ')') {
                result += sign * operand;

                result *= stack.top();
                stack.pop();

                result += stack.top();
                stack.pop();

                operand = 0;
            }
        }
        return result + (sign * operand);
    }
};
