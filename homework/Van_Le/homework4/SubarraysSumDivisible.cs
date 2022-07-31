public class SubarraysSumDivisible {
    public int SubarraysDivByK(int[] nums, int k) {
        int len = nums.Length;
        Dictionary<int,int> dict = new Dictionary<int,int>();
        int count = 0;
        int sum = 0;
        
        for (int i = 0; i < len; i++) {
            if (!dict.ContainsKey(sum))
                dict.Add(sum, 1);
            else
                dict[sum]++;
            
            sum += nums[i];
            sum %= k;
            
            if (sum < 0)
                sum += k;
            
            if (dict.ContainsKey(sum))
                count += dict[sum];
        }
        
        return count;
    }
}