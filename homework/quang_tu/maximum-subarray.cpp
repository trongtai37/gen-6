class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int cur = 0, res = INT_MIN;

        for(int i = 0; i < nums.size(); ++i) {
            cur = cur > 0 ? cur + nums[i] : nums[i];
            res = max(cur, res);
        }

        return res;
    }
};
