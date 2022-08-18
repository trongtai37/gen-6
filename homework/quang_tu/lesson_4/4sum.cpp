class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        int n = nums.size();

        if (n < 4)
            return {};

        sort(nums.begin(), nums.end());

        vector<vector<int>> result;

        for (int i = 0; i < n - 3; ++i) {
            for (int j = i + 1; j < n - 2; ++j) {
                long total = nums[i] + nums[j];

                vector<vector<int>> twoNumber = twoSum(nums, j+1, total, target);

                if (twoNumber.size()) {
                    for (auto p: twoNumber) {
                        result.push_back({nums[i], nums[j], p[0], p[1]});
                    }
                }

                int k = j;
                while (k < nums.size() && nums[k] == nums[j]) k++;
                j = k - 1;
            }

            int k = i;
            while (k < nums.size() && nums[k] == nums[i]) k++;
            i = k - 1;
        }

        return result;
    }

private:
    vector<vector<int>> twoSum(vector<int>& nums, int begin, long total, int target) {
        vector<vector<int>> result;
        int i = begin, j = nums.size() - 1;

        while (i < j) {
            long sum = total + nums[i] + nums[j];
            if (sum < target || (i > begin && nums[i] == nums[i-1])) {
                i++;
            } else if (sum > target || (j < nums.size() - 1 && nums[j] == nums[j+1])) {
                j--;
            } else {
                result.push_back({nums[i++], nums[j--]});
            }
        }

        return result;
    }
};
