// Begin from empty subset. 
// Then at each step just take 1 number into consideration and add new subsets by updating the existing ones.

public class SubsetsSolution
{
    public IList<IList<int>> Subsets(int[] nums)
    {
        IList<IList<int>> result = new List<IList<int>>();

        if (nums == null || nums.Length == 0)
            return result;

        // add the empty first
        result.Add(new List<int>());

        foreach (var num in nums)
        {
            // Since the size of the result will be changed while in loop, need to clone a new variable to avoid from being stack overflow.
            // But why taking the updated count of the result?
            // For each number from nums[] is taken consideration, 
            // the number of steps for that number to be handled will
            // be the same of the current number of the existing subsets
            // Because we have 2^n subsets afterall, it means after each new number
            // to be handled, the number of subsets then will be double of size.
            int currentResultCounting = result.Count;

            // take 1, 2, 3 as an example
            // first, there will be empty subset which needs to be a part of the result subset.
            // take 1 into consideration then, by cascading 1, we need to add just [1] into the existing subset.
            // take 2 into consideration then, the subset's size after being handled will be doubled
            // that means, before taking 2 into consideration, the size of the subset is 2
            // after taking 2 into consideration, the size of the subset will be doubled, actually 4
            // so if handle 2 from nums[] to add to the existing subsets, it needs to repeat twice.
            // first time, will add 2, the second time, will add both 1 and 2 into the existing subset.
            // it will be the same process as taking 3 into consideration.

            for (int i = 0; i < currentResultCounting; i++)
                result.Add(new List<int>(result[i]) { num });
        }

        return result;
    }
}

// we have to loop through the nums array, so the time complexity is O(n) with n is the length of nums[]
// but each loop need O(2^n), so the overall runtime complexity will be O(n2^n)
// space complexity will be O(n2^n)
