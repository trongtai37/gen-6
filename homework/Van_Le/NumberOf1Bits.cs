// for any number of n, we can do a bitwise AND of n and n-1, it will flip only 1 bit of n into 0.
// as soon as the number of n becomes 0, there will no longer be 1 bit left. 
// So just repeatedly flip 1 bit and add 1 to the sum 

public class NumberOf1Bits
{
    public int HammingWeight(uint n)
    {
        int sum = 0;
        while (n != 0)
        {
            sum++;
            n &= (n - 1);
        }
        return sum;
    }
}