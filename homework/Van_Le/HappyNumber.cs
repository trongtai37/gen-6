// Like the linked list cycle solution
// Let's use two pointer
// If there is a cycle, the fast pointer will meet 1 -> return true in this case
// If there is no cycle, the fast pointer will meet the slow one -> return false in this case
// Runtime complexity: O(logn) with n is the input
// Space complexity: O(1)

public class HappyNumber
{
    public bool IsHappy(int n)
    {
        int slowRunner = n;
        int fastRunner = GetNext(n);
        while (fastRunner != 1 && slowRunner != fastRunner)
        {
            slowRunner = GetNext(slowRunner);
            fastRunner = GetNext(GetNext(fastRunner));
        }
        return fastRunner == 1;
    }

    private int GetNext(int n)
    {
        int totalSum = 0;
        while (n > 0)
        {
            int d = n % 10;
            n = n / 10;
            totalSum += d * d;
        }
        return totalSum;
    }
}