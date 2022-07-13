public class SubsetsSolution
{
    public IList<IList<int>> Subsets(int[] nums)
    {
        IList<IList<int>> result = new List<IList<int>>();

        if (nums == null || nums.Length == 0)
            return result;

        result.Add(new List<int>());

        foreach (var num in nums)
        {
            int currentResultCounting = result.Count;

            for (int i = 0; i < currentResultCounting; i++)
                result.Add(new List<int>(result[i]) { num });
        }

        return result;
    }
}