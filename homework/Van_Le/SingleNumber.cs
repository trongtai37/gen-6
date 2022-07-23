// if both same number is XORed with each others, the result will be 0
// if any number is XORed with 0, the result will be that same number
// so if we need to find the unique number in an array, you can XOR every single item so that you can get that result
// runtime complexity: O(n), space complexity: O(1)

public class SingleNumber {
    public int SingleNumber(int[] nums) {
        int res = 0;
        for(int i = 0;i<nums.Length;i++)
            res ^= nums[i];
        return res;
    }
}