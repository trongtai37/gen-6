public class KDiffPairs
{
    public int FindPairs(int[] nums, int k)
    {
        Dictionary<int,int> dict = new Dictionary<int, int>();
        HashSet<int> set = new HashSet<int>();
        int result = 0;

        // need a hashtable that can receive a key as each number in nums[]
        // and a value as its key plus k
        foreach (int i in nums)
        {
            if (!dict.ContainsKey(i)) dict.Add(i, i + k);

            // if k = 0, just add the count of the pair by 1
            else if (k == 0)
            {
                if (!set.Contains(i))
                {
                    set.Add(i);
                    result++;
                }
            }
        }

        if (k == 0) return result;

        // add the counter of the pair by 1 if each item value of the hashtable contains one of
        // the key within the hashtable
        foreach (var kvp in dict)
        {
            if (dict.ContainsKey(kvp.Value)) result++;
        }

        return result;
    }
}