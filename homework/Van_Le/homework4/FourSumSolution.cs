public class FourSumSolution
{
    public IList<IList<int>> FourSum(int[] nums, int target)
    {
        IDictionary<int, IList<(int, int)>> sum2Pair = new Dictionary<int, IList<(int, int)>>();

        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                int sum = nums[i] + nums[j];
                if (!sum2Pair.ContainsKey(sum))
                {
                    sum2Pair[sum] = new List<(int, int)>();
                }

                sum2Pair[sum].Add((i, j));
            }
        }

        ISet<(int, int, int, int)> quads = new HashSet<(int, int, int, int)>();

        List<int> quadBuffer = new List<int>(4);
        foreach (var sum in sum2Pair.Keys)
        {
            int remaining = target - sum;
            if (!sum2Pair.ContainsKey(remaining))
            {
                continue;
            }

            var otherPairs = sum2Pair[remaining];
            foreach (var pair in sum2Pair[sum])
            {
                foreach (var otherPair in otherPairs)
                {

                    quadBuffer.Clear();

                    quadBuffer.Add(pair.Item1);
                    quadBuffer.Add(pair.Item2);
                    quadBuffer.Add(otherPair.Item1);
                    quadBuffer.Add(otherPair.Item2);

                    quadBuffer.Sort();

                    var distinct = quadBuffer.Distinct().ToArray();

                    if (distinct.Length != 4)
                    {
                        continue;
                    }

                    var quad = (distinct[0], distinct[1], distinct[2], distinct[3]);
                    quads.Add(quad);
                }
            }
        }

        if (quads.Count == 0)
        {
            return new List<IList<int>>();
        }

        return quads.Select(q =>
            {
                var arr = new int[] {nums[q.Item1], nums[q.Item2], nums[q.Item3], nums[q.Item4]};
                Array.Sort(arr);
                return (arr[0], arr[1], arr[2], arr[3]);
            })
            .ToHashSet()
            .Select(q => (IList<int>)new List<int>(4) { q.Item1, q.Item2, q.Item3, q.Item4 }).ToList();
    }
}