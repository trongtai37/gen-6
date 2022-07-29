using System.Text;

public class RemoveAllAdjacentDuplicatesII
{
    public string RemoveDuplicates(string s, int k)
    {
        var stack = new Stack<(char ch, int count)>();
        foreach (var ch in s)
        {
            // to check the case whether the top of the stack is equal to the
            // current character that we are standing when make a scan for string s
            if (stack.Any() && stack.Peek().ch == ch)
            {
                // if yes, just update the counter of the top stack
                var temp = stack.Pop();
                temp.count++;
                stack.Push(temp);

                // if the counter of the top stack is the same as k
                if (stack.Peek().count == k) // match k duplicate
                {
                    // just remove that top of the stack
                    stack.Pop();
                }
            }
            else
            {
                // if the stack is empty or the top item character of the stack is different
                // from the current character that we are standing when make a scan for string s
                // then just push the new one.
                stack.Push((ch, 1));
            }
        }

        // use stringbuilder is the ideal way to build a string from another format if we can't know
        // the length of the string in advance
        StringBuilder sb = new StringBuilder();

        // pop each character that is remaining from the stack and append that character to the string builder
        while (stack.Any())
        {
            var top = stack.Pop();
            for (int i = 0; i < top.count; i++)
            {
                sb.Append(top.ch);
            }
        }

        // since sb is just a string builder that is not the expected output type that we need
        // so just convert that type of data and second, reverse the data because of the FIFO 
        // mechanism when we pop the top character from the stack -> we need to know that FIFO is 
        // the typical factor that easily converse the order.
        return new string(sb.ToString().Reverse().ToArray());
    }
}