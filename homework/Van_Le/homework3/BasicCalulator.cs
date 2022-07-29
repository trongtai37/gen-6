public class BasicCalulator
{
    public int Calculate(string s)
    {
        Stack<int> stack = new Stack<int>();
        int operand = 0;
        int result = 0;
        int sign = 1;  // 1 means positive, -1 means negative

        for (int i = 0; i < s.Length; i++)
        {
            char ch = s[i];
            if (Char.IsDigit(ch))
            {
                operand = 10 * operand + (int)(ch - '0');
            }
            else if (ch == '+')
            {
                result += sign * operand;
                sign = 1;
                operand = 0;
            }
            else if (ch == '-')
            {
                result += sign * operand;
                sign = -1;
                operand = 0;
            }
            else if (ch == '(')
            {
                stack.Push(result);
                stack.Push(sign);
                sign = 1;
                result = 0;

            }
            else if (ch == ')')
            {
                result += sign * operand;
                result *= stack.Pop();
                result += stack.Pop();
                operand = 0;
            }
        }
        return result + (sign * operand);
    }
}