namespace running_app
{
    public class ProductArrayExceptSelf
    {
        public int[] ProductExceptSelf(int[] nums)
        {
            List<int> result = new List<int>();

            int prefix = 1;
            for (int i = 0; i < nums.Length; i++)
            {
                result.Add(prefix);
                prefix = prefix * nums[i];
            }

            int postFix = 1;
            for (int i = nums.Length - 1; i >= 0; i--)
            {
                result[i] = postFix * result[i];
                postFix = postFix * nums[i];
            }

            return result.ToArray();
        }
    }
}