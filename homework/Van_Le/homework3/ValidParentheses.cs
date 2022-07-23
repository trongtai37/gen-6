public class ValidParentheses
{
    // make a map to mark the fitting closing and opening pair
    private Dictionary<char, char> closeToOpenMapping = new Dictionary<char, char>();
    public ValidParentheses()
    {
        closeToOpenMapping[')'] = '(';
        closeToOpenMapping['}'] = '{';
        closeToOpenMapping[']'] = '[';
    }
    public bool IsValid(string s)
    {
        Stack<char> stack = new Stack<char>();
        char topStack;
        for (int i = 0; i < s.Length; i++)
        {
            char c = s[i];

            // If the current character is a closing bracket then
            // try to match that closing bracket using hashmap
            if (this.closeToOpenMapping.ContainsKey(c))
            {

                // Get the top element of the stack. If the stack is empty, set a dummy value
                if (stack.Count == 0) topStack = '\0';
                else topStack = stack.Pop();

                // If the mapping for this bracket doesn't match the stack's top element, return false.
                if (topStack != this.closeToOpenMapping[c])
                {
                    return false;
                }
            }
            else
            {
                // If it is just an opening bracket, then push to the stack.
                stack.Push(c);
            }
        }

        // If the stack still contains elements, then it is an invalid expression.
        return stack.Count == 0;
    }
}