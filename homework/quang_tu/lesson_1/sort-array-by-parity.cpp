class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& nums) {
        int l = nums.size() - 1;

        for (int i = l, bound = i; i >= 0; --i) {
            if (nums[i] & 1) {
                int term = nums[bound];
                nums[bound] = nums[i];
                nums[i] = term;
                bound--;
            }
        }

        return nums;
    }
};
